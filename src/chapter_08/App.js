import React, { useRef } from "react";
import UseRefVariable from "./UseRefVariable";

function App() {
  const users = [
    { id: 1, username: "velopert", email: "public.velopert@gmail.com" },
    { id: 2, username: "tester", email: "tester@example.com" },
    { id: 3, username: "liz", email: "liz@example.com" },
  ];

  const nextId = useRef(4);
  /*
  여기서 useRef를 쓰는 이유는 이 값이 바뀐다고 해서 
  굳이 컴포넌트가 리렌더링할 필요가 없기 때문이다.
  */

  // eslint-disable-next-line no-unused-vars
  const onCreate = () => {
    console.log(nextId.current); //4 현재값을 조회하고 싶을 때
    nextId.current += 1; //이 함수가 실행될 때마다 nextId.current를 사용하고 1증가한다.
  };

  return <UseRefVariable users={users} />;
}

export default App;
