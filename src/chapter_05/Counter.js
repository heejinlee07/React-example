import React, { useState } from 'react';
// useState를 통해 바뀌는 값을 관리하고, 값의 기본값은 함수의 파라미터로 넣어준다.

function Counter() {
  const [number, setNumber] = useState(0);
  /*
  NOTE:
  number라는 상태를 만들 것인데, 그 상태의 기본값은 0으로 한다.
  setNumber는 상태를 바꿔주는(업데이트하는) 함수.
  useState가 호출되었을 때 배열을 반환.
  첫 번째 원소를 number, 두 번째 원소를 setNumber라는 이름으로 추출한다.

  원래 이 코드는 아래와 같이 작성되었으나 
  배열비구조화할당(구조분해)를 통해서 위와 같이 작성된 것.
  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1];
  */

  const onIncrease = () => {
    // console.log('+1');
    // setNumber(10);이라고 넣으면 number의 값이 10으로 바뀌는 것.
    setNumber(number + 1);
    /*
    NOTE:
    setNumber뒤에 다음 업데이트할 값을 넣어주는 대신에 
    이 값을 어떻게 할지에 대한 함수(로직)을 넣어줄 수도 있다.
    setNumber(prevNumber => prevNumber + 1);
    업데이트 함수: 현재상태를 가져와서 이런 식으로 업데이트하곘다는 의미.
    함수형 업데이트는 성능 최적화와 관련있다.

    setNumber(number + 1); 은 number 값을 참조하여 그것에 1을 더한 값을 넣겠다는 뜻.
    setNumber(prevNumber => prevNumber + 1);는 이런 식으로 업데이트할거라는 로직을 넣어주는 것.
    */
  };
  const onDecrease = () => {
    // console.log('-1');
    setNumber(number - 1);
    // setNumber(prevNumber => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* REMIND: React에서는 JS,HTML과 다르게 onclick이 아니라 onClick이다. */}
      {/* 함수를 넣는 것이지, 호출하는 것이 아니므로 주의해야한다. */}
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
