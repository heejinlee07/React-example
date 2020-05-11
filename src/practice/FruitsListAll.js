import React from "react";

function Fruits({ fruits, onRemove, onToggle }) {
  const { fruitsname, price, id, active } = fruits;
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
        <Fruits fruits={fruit} key={fruit.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}
export default FruitsListAll;
