import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
const TodoList = ({ todos }) => {
  return todos.length > 0 ? (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  ) : (
    <p className={styles.todoList}>Nothing here yet...</p>
  );
};

export default TodoList;
