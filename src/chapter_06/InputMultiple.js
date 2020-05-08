import React, { useState, useRef } from 'react';

function InputMultiple() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = e => {
    // e.target에서 name과 value를 추출
    const { name, value } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.value);

    // name이나 nickname을 바꿀 새로운 객체 설정
    setInputs({ ...inputs, [name]: value });
  };

  /*
  NOTE:
  객체상태의 업데이트는 아래와 같은 과정을 거친다.
  1.객체를 복사(스프레드문법)
  2.값을 덮어씌워서 객체 업데이트. nextInputs[name] = value;
  const nextInputs = { ...inputs, [name]: value };
  3. 새로운 객체를 만들어서 새로운 상태로 쓰겠다.(불변성을 지킴)
  setInputs(nextInputs);
  */

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
    // current가 Dom을 가리킨다.
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputMultiple;

/*
NOTE: useRef
- 특정 DOM을 직접 가져올 때 
- 변수 관리할 때 사용

- 함수형 컴포넌트: useRef
- 클래스 컴포넌트: React.createRef()
*/
