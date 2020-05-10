import React, { useRef, useState } from "react";
import UseRefVariable from "./UseRefVariable";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    { id: 1, username: "velopert", email: "public.velopert@gmail.com" },
    { id: 2, username: "tester", email: "tester@example.com" },
    { id: 3, username: "liz", email: "liz@example.com" },
  ]);

  const nextId = useRef(4);
  /*
  여기서 useRef를 쓰는 이유는 이 값이 바뀐다고 해서 
  굳이 화면을 리렌더링할 필요가 없기 때문이다.
  */

  /*
  NOTE:
  배열에 변화를 줄 때 객체처럼 기존의 배열을 바꾸지 않고, 새로운 배열을 만들어서 거기에 변화를 주는 방식
  따라서 배열에 직접적인 변화를 주는 push,splice,sort 같은 함수는 사용하면 안된다.
  만약 꼭 사용을 해야하는 상황이라면 배열을 복사한 뒤 사용한다.
  */

  const onCreate = () => {
    //console.log(nextId.current); //4 현재값을 조회하고 싶을 때
    const user = {
      id: nextId.current,
      username,
      email,
      //...inputs라고 사용해도 같은 결과 출력
    };
    setUsers([...users, user]);
    //기존의 배열을 복사해서 이 자리에 넣은 다음에 user를 넣으면 새 항목이 추가되는 것.
    //setUsers(users.concat(user)) 이 방법을 사용해도 된다.
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1; //이 함수가 실행될 때마다 nextId.current를 사용하고 1증가한다.
  };

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UseRefVariable users={users} />
    </>
  );
}

export default App;

/*
REMIND:
배열에 항목을 추가하는 방법
1. 스프레드 연산자로 배열을 복사한 후 원하는 값을 넣어준다.
  ex) setUsers([...users, user]);
2. concat 메소드를 사용
  ex) setUsers(users.concat(user))

3. push를 사용하면 업데이트되지 않으니 절대 사용하지 않는다. 
*/
