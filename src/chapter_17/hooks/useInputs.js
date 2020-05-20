import { useState, useCallback } from "react";

/*
NOTE:
custom hook을 만들 때는 use로 시작+구현할 기능에 대한
단어를 넣어서 함수를 만든다.
반복되는 로직을 쉽게 재사용할 수 있도록 custom hook를 만든다.
*/

// TODO: reducer로 구현해보기
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    //update
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  //form 초기화
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  //객체 또는 배열의 형태로 내보낸다.
  return [form, onChange, reset];
}

export default useInputs;
