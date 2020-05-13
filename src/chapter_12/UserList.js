/*
 * NOTE: UseEffect
 * 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때),
 * 그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리
 */
import React, { useEffect } from "react";

/*
 * 특정 작업이 마운트, 언마운트 되었을 때 처리
 * 첫 번째 파라미터: 실행하고 싶은 함수,
 * 두 번째 파라미터: 배열(dependency를 줄여서 deps라고 부른다. 의존되는 값들을 배열 안에 넣어준다.)
 * 배열이 비어있으면 컴포넌트가 처음 화면에 나타날 때만 한 번 실행된다. 업데이트 시에는 호출안됨.
 */
function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    // useEffect의 함수가 호출된 시점은 UI가 화면에 나타난 상태 이후니 여기서 DOM에 직접 접근 가능
    // cleanup함수. 컴포넌트가 사라질 때 함수를 return한다.
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  /**
   * NOTE:
   * 컴포넌트가 마운트 될 때 하는 작업
   * props 로 받은 값을 컴포넌트의 state(로컬 상태)로 설정
   * 외부 API 요청할 때 (REST API 등)
   * 라이브러리 사용할 때 (D3, Video.js 등...)
   * setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
   *
   * 언마운트 될 때 하는 작업
   * setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
   * 라이브러리 인스턴스 제거
   */

  //배열 안에 값이 있을 때, 배열안의 값이 설정되거나 바뀔 때마다(업데이트 된 직후) useEffect에서 등록한 함수가 호출된다.
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);
    //cleanup함수. [user]에 있는 값이 바뀌기 직전에 호출됨.
    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  //[관리 할 상태] : [] 자리에 관리 할 상태를 넣어야 하기 때문에
  //상태 정의 아래에 ex.(useState)가 정의 된 아래에 useEffect를 구현해야 한다.

  /**
   * REMIND:
   * useEffect 안에서 사용하는 상태나, props, 함수가 있다면 deps 에 넣어주어야 한다.
   * 만약 useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면
   * useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 된다.
   */

  /**
   * deps 배열을 아예 생략하는 경우
   * 컴포넌트가 리렌더링 될 때마다 호출된다. 업데이트 시에 모든 컴포넌트가 실행됨.
   * 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링되기 때문.
   * 실제 DOM에 반영되는 것은 바뀐 내용이 있는 컴포넌트지만 Virtual DOM에서는 다 렌더링한다.
   */
  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <b style={{ color: active ? "green" : "black", cursor: "pointer" }} onClick={() => onToggle(id)}>
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
