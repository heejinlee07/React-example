import React from 'react';
import Hello from '../chapter_1/Hello';
import './App.css';

/**
 * NOTE:
 * JSX규칙
 * 1. 태그는 꼭 닫혀있어야 한다. ex) <div></div>
 * 2. <input>처럼 닫히는 태그가 없는 경우 또는
 * 태그 사이에 별도의 내용이 없다면 셀프클로징한다. ex) <input />
 * 3. 2개 이상의 태그는 반드시 하나의 태그로 감싸줘야 한다. ex) div로 감싸줌.
 * 
 * EXAMPLE:
 * function App() {
    return (
     <div>
       <Hello />
       <div>안녕히계세요.</div>
     </div>
    );
  }
 */

/*
EXAMPLE:
 3.에서 <div>로 감싸주는 것이 싫다면 fragment tag사용{<></>}
 이렇게 하면 불필요한 div가 없어진다.

 function App() {
  return (
    <>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Fruits></Fruits>
    </>
  );
}

참고로 return 뒤의 소괄호()는 가독성을 위해 감싸준 부가적인 것.
*/

// JSX 내부에서 JS 값을 사용하는 방법
function App() {
  const name = 'react';
  // style을 사용할 때는 객체로 작성해야 한다.
  // style 지정할 때, 대시(-)로 구분된 것은 카멜케이스로 표기
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    <>
      <Hello
      //이 사이에서 작성하는 주석은 화면에 표기되지 않음.
      />
      <Hello />
      <Hello />
      {/* 만약 중괄호를 하지 않으면 그냥 name이라는 문자열이 출력. */}
      {/* REMIND: 반드시 중괄호를 해야 JS값을 보여줄 수 있다. */}
      <div style={style}>{name}</div>
      {/* css의 클래스명은 className으로 사용 */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
