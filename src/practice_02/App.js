import React, { useState, useRef } from "react";
import CreateTodo from "./CreateTodo";
import Todolist from "./Todolist";

function App() {
  const [inputs, setInputs] = useState({
    todoname: "",
  });

  const { todoname } = inputs;

  const onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [todos, setTodos] = useState([
    { id: 1, todoname: "javascript", active: false },
    { id: 2, todoname: "react", active: true },
    { id: 3, todoname: "html", active: true },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      todoname,
    };
    setTodos([...todos, todo]);
    setInputs({
      todoname: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, active: !todo.active } : todo)));
  };

  return (
    <>
      <h2>오늘의 할 일</h2>
      <CreateTodo todoname={todoname} onChange={onChange} onCreate={onCreate} />
      <Todolist todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
