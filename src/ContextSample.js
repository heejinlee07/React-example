import React, { createContext, useContext, useState } from "react";

//REMIND: context를 사용할 때 createContext를 사용하고 파라미터는 기본값.
const MyContext = createContext("defaultValue");

function Child() {
  // useContext는 context에 있는 값을 읽어와서 사용할 수 있게 해주는 hook
  //defaultValue가 나타나는 것이 아닌, 값을 지정하고 싶다면 Provider 이용.
  const text = useContext(MyContext);
  return <div>안녕하세요 {text} </div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>click me!</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
