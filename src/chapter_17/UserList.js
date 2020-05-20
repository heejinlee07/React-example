import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id,
          })
        }
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

// React.memo 에서 두번째 파라미터에 propsAreEqual 이라는 함수를 사용하여 특정 값들만 비교를 하는 것도 가능
// 그러나 만약 함수형 업데이트를 하지 않았는데 users 만 비교를 하게 된다면,
// onToggle 과 onRemove 에서 최신 users 배열을 참조하지 않으므로 심각한 오류가 발생
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
