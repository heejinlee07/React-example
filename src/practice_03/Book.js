/* eslint-disable */
import React, { useEffect, useReducer } from "react";
import List from "./List";

const initialState = {
  bookState: [
    {
      _id: date.getTime(),
      name: "김건희",
      phone: "01080775647",
    },
  ],
  inputState: {
    name: "",
    phone: "",
  },
};

function reducer(type, action) {
  switch (action.type) {
    case "CHANGE_INPUT": 
      return{
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,

      }
  }
}

const Book = () => {
  const [state, dispatch] = (reducer, initialState);
  const date = new Date();

  useEffect(() => {
    console.log("부모 컴포넌트가 화면에 나타남");
    console.log(bookState);
    return () => {
      console.log("부모 컴포넌트가 화면에서 사라짐");
    };
  }, [bookState]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", name, value });    
  };
  // const addPhone = () => {
  //   const newPhone = {
  //     _id: date.getTime(),
  //     name: inputState.name,
  //     phone: inputState.phone,
  //   };
  //   setBookState(bookState.concat(newPhone));
  // };

  // const deletePhone = (_id) => {
  //   console.log(_id);
  //   setBookState(bookState.filter((p) => p._id !== _id));
  // };
  // const phoneList = bookState;

  return (
    <div>
      <div>
        <input type="text" name="name" onChange={changeInput} />
        <input type="text" name="phone" onChange={changeInput} />
        <button onClick={addPhone}>번호 등록</button>
      </div>

      <List phone={phoneList} deletePhone={deletePhone} />
    </div>
  );
};

export default Book;
