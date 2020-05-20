import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  console.log("createuser");
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

//props가 바꼈을 때만 리렌더링함.
export default React.memo(CreateUser);

/*TODO: 
User 컴포넌트에게 따로 onToggle / onRemove 를 props로 전달하지 않고 바로 dispatch 를 사용했던 것 처럼, CreateUser 컴포넌트에서도 dispatch 를 직접 하도록 구현을 해보세요.

CreateUser 에게는 아무 props 도 전달하지 마세요.
CreateUser 컴포넌트 내부에서 useInputs 를 사용하세요.
useRef 를 사용한 nextId 값을 CreateUser 에서 관리하세요.*/
