
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos = [] }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todos.id} todo={todo}/>
        ))}
      </ul>
    </>
  );
};
