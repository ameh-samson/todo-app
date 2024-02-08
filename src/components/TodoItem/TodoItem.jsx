import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
