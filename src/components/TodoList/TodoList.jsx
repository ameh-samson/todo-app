import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
};

export default TodoList;
