import { ListGroupItem } from "react-bootstrap";

type Todo = {
  title: string;
  status: string;
  done: boolean;
};

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <ListGroupItem>
      <input
        type="checkbox"
        className="me-2"
        defaultChecked={todo.done}
      />
      {todo.title} ({todo.status})
    </ListGroupItem>
  );
};

export default TodoItem;