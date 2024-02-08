import styles from "./Footer.module.css";

const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>{" "}
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </footer>
  );
};

export default Footer;
