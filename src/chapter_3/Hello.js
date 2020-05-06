// 상단에 반드시 입력
import React from 'react';

// props는 상위 컴포넌트(부모)에서 하위 컴포넌트(자식)으로 값을 전달할 때 사용
// props에는 넣어준 값이 객체 형태로 들어가 있다.
// 특정값을 전달하고 싶을 때 사용.

function Hello(props) {
  console.log(props);
  // JS값이므로 중괄호로 한번감싸줌. {{}} -> 객체를 중괄호로 한번 감싸줌.
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}

/* 
하지만 props를 인수로 전달하면 매번 props.blabla의 형태로 작성해야하니 
비구조화할당으로 인수를 전달할 수 있다.

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}
*/

// 만약 특정값을 생략했을 때 기본적으로 사용할 값을 설정.
// <Hello name="react" color="red" />; 에서 name="react"를 빠뜨렸을 경우.

Hello.defaultProps = {
  name: '이름없음',
};

// Hello라는 컴포넌트를 만든 후 내보낸다는 의미
export default Hello;
