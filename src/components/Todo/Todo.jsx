import { useState } from "react";
import styles from "./Todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
