"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { TodosProvider, useTodos } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodos()!;

  return (
    <div id="wd-react-context-todo-list">
      <h2>React Context Todo List</h2>

      <div className="d-flex gap-2 mb-3">
        <FormControl
          value={todo.title}
          placeholder="New todo..."
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />

        <Button variant="warning" onClick={updateTodo}>
          Update
        </Button>

        <Button variant="success" onClick={addTodo}>
          Add
        </Button>
      </div>

      <ListGroup>
        {todos.map((t) => (
          <ListGroupItem
            key={t.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{t.title}</span>

            <div className="d-flex gap-2">
              <Button
                size="sm"
                variant="primary"
                onClick={() => setTodo(t)}
              >
                Edit
              </Button>

              <Button
                size="sm"
                variant="danger"
                onClick={() => deleteTodo(t.id)}
              >
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