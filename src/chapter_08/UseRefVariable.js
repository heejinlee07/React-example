import React from "react";

/*
 * NOTE:
 * 컴포넌트 내부에서 let을 사용해서 변수를 만들었다면
 * 다음 리렌더링 시에 변수값은 초기화. 만약 값을 유지하고 관리하고 싶다면
 * useState를 쓰면 되는데 단, 상태를 바꾸면 컴포넌트가 리렌더링됨.
 * useRef는 상태를 바꿨을 때 굳이 리렌더링이 필요없을 때 사용한다.
 *
 * 컴포넌트가 리렌더링될 때마다 계속 기억할 수 있는 어떠한 값의 관리에도 사용.
 * ex) setTimeout, setInterval의 id관리(기억),
 * 외부 라이브러리를 사용하여 생성된 인스턴스를 담을 때,
 * 스크롤 위치를 알고 있어야 될 때 등등 사용.
 *
 * REMIND: useRef로 관리하는 값은 바뀌더라도 컴포넌트가 리렌더링되지 않는다.
 */

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

function UseRefVariable({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UseRefVariable;
