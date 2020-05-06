import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

/**
 * NOTE:
 * props.children의 사용
 * <div>
 *  blabla
 * </div>
 *
 * 태그와 태그 사이에 내용을 넣고 싶은데 <div>로
 * 묶여 있는 것이 아니라 컴포넌트로 묶여있을 때 사용.
 * 컴포넌트 안에 있는 값을 조회하기 위해 사용.
 *
 * <Wrapper>
 *  blabla
 * </Wrapper>
 *
 * <Wrapper>태그 사이에 있는 내용이 children
 */
