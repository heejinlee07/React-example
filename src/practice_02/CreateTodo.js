import React from "react";

function CreateTodo({ todoname, onChange, onCreate }) {
  return (
    <div>
      <input name="todoname" onChange={onChange} value={todoname} placeholder="할일을 입력하세요"></input>
      <button onClick={onCreate}>할일 추가</button>
    </div>
  );
}

export default CreateTodo;
