import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
};

export default TodoList;
