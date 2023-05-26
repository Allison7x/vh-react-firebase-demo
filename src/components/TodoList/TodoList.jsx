import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <div className="todo-container">
      {todos.map(({ id, description, title, added }) => (
        <div className="card" key={id}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <p>{description}</p>
          <small>
            {new Date(parseInt(added.seconds) * 1000).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
