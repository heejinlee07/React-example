import React, { useReducer } from "react";
//action의 type이 무엇이 오느냐에 따라 다른 업데이트를 한다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("unhangled action");
    // return state도 가능.
  }
}

// 상태에 대한 update 로직이 컴포넌트 밖에 위치
function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

/**
 * NOTE: useReducer
 * 컴포넌트 상태를 업데이트할 때는 useState사용,
 * useState는 설정하고 싶은 다음 상태를 직접 지정하는 방식으로 업데이트
 * useReducer는 액션 객체를(업데이트할 때 참조하는 객체) 기반으로 업데이트
 * ex) dispatch({types:'INCREMENT})
 * type은 어떤 업데이를 진행할 것인지 명시
 *
 * useReducer를 쓰면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리가능
 * 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고,
 * 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.
 */

/**
 *  NOTE: reducer: 상태를 업데이트 하는 함수
 * 현재 상태와 액션 객체를 파라미터로 받아와서
 * 새로운 상태를 반환, reducer가 반환하는 상태는 컴포넌트가 지닐 새로운 상태
 */

/**
 * REMIND: useReducer
 * const [number, dispatch]=useRecucer(reducer, 0);
 * 첫 번째 파라미터: reduce함수
 * 두 번째 파라미터: 기본값(객체, 배열, 문자 등등 )
 * number: 현재상태
 * dispatch: 액션을 발생시키는 함수.
 * 결과 값: 현재 상태가 아닌 그 다음 상태
 */
