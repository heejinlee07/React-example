import React, { useState } from "react";

function Fruits() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <h2>fruits list</h2>
      <input onChange={onChange} placeholder="make a friuts list" value={text}></input>
      <ul>
        <li>banana</li>
        <li>tomato</li>
        <li>apple</li>
      </ul>
      <button onClick={onReset}>add fruits</button>
    </div>
  );
}

export default Fruits;
