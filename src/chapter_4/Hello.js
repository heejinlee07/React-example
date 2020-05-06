import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}안녕하세요{name}
      {/* 조건부 렌더링: 조건에 따라 렌더링, jsx에서 null, undefined, false는 아무것도 나타나지 않음. */}
      {/* falsy인 0은 그대로 0으로 렌더린됨. */}
    </div>
  );
}

/*
NOTE:
보통 삼항연산자는 내용이 달라질 때 사용. 
위와 같이 보이거나 안보이는 것을 설정할 때는 AND연산자 사용이 더 적절.
{isSpecial && <b>*</b>}

조건식에 따라 보여지는 값이 아예 다를 경우 삼항연산자 사용
{isSpecial ? "스페셜하다" : "낫스페셜"}
*/

// 만약 특정값을 생략했을 때 기본적으로 사용할 값을 설정.
// <Hello name="react" color="red" />; 에서 name="react"를 빠뜨렸을 경우.

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
