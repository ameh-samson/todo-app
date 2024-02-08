import styles from "./TodoItem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : ""
    );
    setTodos(newArr);
  };

  const itemDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemDone} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
