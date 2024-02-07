import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        type="text"
        placeholder="Enter todo item..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
