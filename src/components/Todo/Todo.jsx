import { useState } from "react";
import styles from "./Todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className={styles.todoWrapper}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
