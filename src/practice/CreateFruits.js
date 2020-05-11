import React from "react";

function CreateFruits({ fruitsname, price, onCreate, onChange }) {
  return (
    <div>
      <input name="fruitsname" value={fruitsname} type="text" placeholder="add fruits" onChange={onChange} />
      <input name="price" value={price} type="text" onChange={onChange} placeholder="add price" />
      <button onClick={onCreate}>add fruits</button>
    </div>
  );
}

export default CreateFruits;
