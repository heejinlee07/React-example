import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    { id: 1, username: 'velopert', email: 'public.velopert@gmail.com', active: true },
    { id: 2, username: 'tester', email: 'tester@example.com', active: false },
    { id: 3, username: 'liz', email: 'liz@example.com', active: false },
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
      username: '',
      email: '',
    });
    nextId.current += 1; //이 함수가 실행될 때마다 nextId.current를 사용하고 1증가한다.
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // 배열에 있는 특정함수를 업데이트 할 때도 map 함수 사용
  // (불변성을 지키면서 배열을 업데이트 할 때도 사용)
  const onToggle = id => {
    setUsers(users.map(user => (user.id === id ? { ...user, active: !user.active } : user)));
  };

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
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
