import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b>
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/* 이 button이 눌렸을 때 onRemove 함수를 호출하겠다, 
      이 함수는 props로 받아온 onRemove에 id값을 파라미터로 넣어서 호출하겠다는 의미 */}
      {/* onRemove를 따로 함수를 만들지 않고 onRemove(id)만 써서 바로 호출하면
       렌더링하는 순간 onRemove가 호출되어 기존에 있던 컴포넌트가 다 사라짐.*/}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
