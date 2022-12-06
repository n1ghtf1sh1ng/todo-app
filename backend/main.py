from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session, sessionmaker
from starlette.requests import Request
from pydantic import BaseModel
from db import Todo, engine
from fastapi.middleware.cors import CORSMiddleware


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class TodoIn(BaseModel):
    title: str
    done: bool


def get_todo(db_session: Session, todo_id: int):
    return db_session.query(Todo).filter(Todo.id == todo_id).first()


def get_db(request: Request):
    return request.state.db


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8100",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# get all todos


@app.get("/todos/")
def read_todos(db: Session = Depends(get_db)):
    todos = db.query(Todo).all()
    return todos


# get a todo
@app.get("/todos/{todo_id}")
def read_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    return todo


# create a todo
@app.post("/todos/")
async def create_todo(todo_in: TodoIn, db: Session = Depends(get_db)):
    todo = Todo(title=todo_in.title, done=False)
    db.add(todo)
    db.commit()
    todo = get_todo(db, todo.id)
    return todo


# update a todo
@app.put("/todos/{todo_id}")
async def update_todo(todo_id: int, todo_in: TodoIn, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    todo.title = todo_in.title
    todo.done = todo_in.done
    db.commit()
    todo = get_todo(db, todo_id)
    return todo


# delete a todo
@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    db.delete(todo)
    db.commit()


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response
