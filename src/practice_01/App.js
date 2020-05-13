import React, { useState, useRef } from "react";
import CreateFruits from "./CreateFruits";
import FruitsListAll from "./FruitsListAll";

function App() {
  // input창에 대한 useState
  // 화면에 렌더링되는 과일에 대한 useState

  const [inputs, setInputs] = useState({
    fruitsname: "",
    price: "",
  });
  // const resetInput = useRef();

  const { fruitsname, price } = inputs;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [fruitsList, setFruitsList] = useState([
    { id: 1, fruitsname: "banana", price: 5000, active: false },
    { id: 2, fruitsname: "orange", price: 7000, active: true },
    { id: 3, fruitsname: "apple", price: 3000, active: true },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const fruit = {
      id: nextId.current,
      fruitsname,
      price,
    };
    setFruitsList([...fruitsList, fruit]);
    setInputs({
      fruitsname: "",
      price: "",
    });
    nextId.current += 1;
  };

  const onToggle = (id) => {
    setFruitsList(fruitsList.map((fruit) => (fruit.id === id ? { ...fruit, active: !fruit.active } : fruit)));
  };

  const onRemove = (id) => {
    setFruitsList(fruitsList.filter((fruit) => fruit.id !== id));
  };

  /*DEBUG: ERROE/ FOCUS UNDEFINED
  const onReset = () => {
    resetInput.current.focus();
  };
*/

  return (
    <>
      <h2>{"make a FruitsList"}</h2>
      <CreateFruits fruitsname={fruitsname} price={price} onChange={onChange} onCreate={onCreate} />
      <FruitsListAll fruitslist={fruitsList} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
