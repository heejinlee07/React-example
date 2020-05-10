/**
 * NOTE:
 * useCallback: useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용
 * 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고
 * 컴포넌트의 결과물을 재사용 하는 최적화 작업을 할 때 함수를 재사용하는것이 필수
 */

import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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

  // useCallback으로 감싸준 onChange 함수는 [inptus]의 값이
  // 바뀔 때만 함수가 새로 생성, 그렇지 않으면 기존의 함수를 재사용.
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    // 내부에서 의존하고 있는 값이 있는지 확인, useState를 통해 관리하고 있는 inputs가 있고, 이를 deps 안에 넣어준다.
    [inputs]
  );

  const [users, setUsers] = useState([
    { id: 1, username: "velopert", email: "public.velopert@gmail.com", active: true },
    { id: 2, username: "tester", email: "tester@example.com", active: false },
    { id: 3, username: "liz", email: "liz@example.com", active: false },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  // 배열에 있는 특정함수를 업데이트 할 때도 map 함수 사용
  // (불변성을 지키면서 배열을 업데이트 할 때도 사용)
  const onToggle = useCallback(
    (id) => {
      setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    },
    [users]
  );

  //이 함수는 [users]의 값이 바뀔 때에만 호출됨. 그렇지 않으면 이전의 값을 재사용한다.
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
