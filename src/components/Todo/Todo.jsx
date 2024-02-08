import { useState } from "react";
import styles from "./Todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div className={styles.todoWrapper}>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} />
    </div>
  );
};

export default Todo;
