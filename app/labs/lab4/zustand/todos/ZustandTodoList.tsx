"use client";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodoStore();
  return (
    <div id="wd-zustand-todo-list">
      <h2>Zustand Todo List</h2>
      <ListGroup>
        <ListGroupItem className="align-items-center d-flex">
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <div className="ms-2 d-flex gap-3">
            <Button onClick={updateTodo} className="btn btn-warning">
              Update
            </Button>
            <Button onClick={addTodo} className="btn btn-success">
              Add
            </Button>
          </div>
        </ListGroupItem>
        {todos.map((t) => (
          <ListGroupItem key={t.id} className="align-items-center d-flex ">
            {t.title}
            <div className="ms-2 gap-3 d-flex">
              <Button onClick={() => setTodo(t)}>Edit</Button>
              <Button onClick={() => deleteTodo(t.id)} className="btn btn-danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}