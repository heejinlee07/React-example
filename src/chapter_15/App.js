/**
 * NOTE:
 * React.memo: 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화
 * 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링 하도록 설정.
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
    /**
     * WHY:
     * deps에 users가 있으니 users 배열이 바뀔때마다 onCreate 도 새로 만들어지고,
     * onToggle,onRemove 도 새로 만들어져서 리렌더링 됨.
     * useState의 함수형 업데이트를 하면 deps에 users를 안넣어도 된다.
     * 콜백함수에서 최신 users를 조회하기 때문에 deps에 안 넣어도 됨.
     */
    setUsers((users) => users.concat(user));
    // setUsers([...users, user]); 이 방법을 사용해도 된다.

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1; //이 함수가 실행될 때마다 nextId.current를 사용하고 1증가한다.
  }, [username, email]);

  // onToggle,onRemove는 함수형 업데이트를 쓰기 때문에 처음 컴포넌트가 만들어질 때만 렌더링되고, 그 다음부턴 재사용함.
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) => users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  }, []);

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
