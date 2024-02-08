import styles from "./Footer.module.css";

const Footer = ({ completedTodos }) => {
  return (
    <footer className={styles.footer}>Completed Todos: {completedTodos}</footer>
  );
};

export default Footer;
