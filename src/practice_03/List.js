import React, { useState, useEffect } from "react";

const List = ({ phone, deletePhone }) => {
  useEffect(() => {
    console.log("자식 컴포넌트가 화면에 나타남");
    return () => {
      console.log("자식 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <ul>
      {phone.map((p, i) => {
        return (
          <li key={i}>
            {p.name + ": " + p.phone} <button onClick={() => deletePhone(p._id)}>[삭제]</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
