import React from "react";

function Fruits({ fruit, onRemove, onToggle }) {
  const { fruitsname, price, id, active } = fruit;
  return (
    <div>
      <b style={{ color: active ? "pink" : "black", cursor: "pointer" }} onClick={() => onToggle(id)}>
        fruitsname: {fruitsname}
      </b>
      &nbsp;
      <span> price: {price} </span>
      <button onClick={() => onRemove(id)}>delete</button>
    </div>
  );
}

function FruitsListAll({ fruitslist, onRemove, onToggle }) {
  return (
    <div>
      {fruitslist.map((fruit) => (
        <Fruits fruit={fruit} key={fruit.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}
export default FruitsListAll;
