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
