import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello name="react" color="red" isSpecial={true} />
      {/*true는 JS값이므로 중괄화로 한 번 감싸준다. */}
      {/* isSpecial={true}에서 isSpecial만 써도 true를 의미 */}
      <Hello color="pink" />
    </>
  );
}

export default App;
