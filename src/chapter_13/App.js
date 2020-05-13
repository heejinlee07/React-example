// useMemo: 성능 최적화에 사용

import React, { useRef, useState, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

/**
 * NOTE:
 * countActiveUsers함수는 users에 변화가 있을 때만 세야하는데, input값이 바뀔 때도
 * 컴포넌트가 불필요하게 호출되어 리렌더링 된다.
 * 이때 useMemo를 사용하면 성능 최적화 가능.
 * 특정 값이 바꼈을 때만, 특정 함수를 실행해서 연산하도록 처리.
 * 원하는 값이 바뀌지 않았다면 리렌더링할 때 이전에 만들었던 값을 재사용한다.
 */
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

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
    { id: 1, username: "velopert", email: "public.velopert@gmail.com", active: true },
    { id: 2, username: "tester", email: "tester@example.com", active: false },
    { id: 3, username: "liz", email: "liz@example.com", active: false },
  ]);

  const nextId = useRef(4);

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

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // 배열에 있는 특정함수를 업데이트 할 때도 map 함수 사용
  // (불변성을 지키면서 배열을 업데이트 할 때도 사용)
  const onToggle = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  };

  //이 함수는 [users]의 값이 바뀔 때에만 호출됨. 그렇지 않으면 이전의 값을 재사용한다
  // 첫 번째 파라미터에 함수를 넣고, 두 번째 파라미터에 변경됨을 감지할 상태(데이터)를 넣음.
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
