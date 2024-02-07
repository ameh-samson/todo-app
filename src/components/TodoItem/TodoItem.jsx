import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  return (
    <div>
      <h3>{item}</h3>
    </div>
  );
};

export default TodoItem;
