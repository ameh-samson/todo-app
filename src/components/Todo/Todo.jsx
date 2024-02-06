import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
};

export default Todo;
