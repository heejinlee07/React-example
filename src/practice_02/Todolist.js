import React from "react";

function Todo({ todo, onToggle, onRemove }) {
  const { id, active, todoname } = todo;
  return (
    <div>
      <b style={{ color: active ? "red" : "black", cursor: "pointer" }} onClick={() => onToggle(id)}>
        {todoname}
      </b>
      <button onClick={() => onRemove(id)}>x</button>
    </div>
  );
}

function Todolist({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default Todolist;
