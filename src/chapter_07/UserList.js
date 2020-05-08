import React from 'react';

// return문에서 동일 코드를 여러번 사용하기 때문에
// 컴포넌트를 하나 더 만들어서 개선.

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, username: 'velopert', email: 'public.velopert@gmail.com' },
    { id: 2, username: 'tester', email: 'tester@example.com' },
    { id: 3, username: 'liz', email: 'liz@example.com' },
  ];

  return (
    // EXAMPLE: 방법1
    // 원래 동일코드를 이렇게 여러번 반복해서 사용했으나
    // User 컴포넌트를 하나 더 만들었기 때문에 더 간략하게 사용.
    // <div>
    //   <div>
    //     <b>{users[0].username}</b>
    //     <span>{users[0].email}</span>
    //   </div>
    //   <div>
    //     <b>{users[1].username}</b>
    //     <span>{users[1].email}</span>
    //   </div>
    //   <div>
    //     <b>{users[2].username}</b>
    //     <span>{users[2].email}</span>
    //   </div>
    // </div>

    // EXAMPLE: 방법2: 이 방법은 배열의 내용이 고정적일 때 사용 가능.
    // <div>
    //   <User user={users[0]} />
    //   <User user={users[1]} />
    //   <User user={users[2]} />
    // </div>

    //EXAMPLE: 방법3: 배열이 내용이 고정적이지 않고 바뀌는 경우 map 사용.

    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

// NOTE:
// key라는 props는 각 원소들마다 고유값을 줌으로써 리렌더링 성능을 최적화.
// 지금의 경우 id값이 고유값이므로 key로 사용
// 추가나 삭제의 경우 key값(ex.id값)을 알고 있어야 엘리먼트가 어떤 데이터를 가리키고 있는지
// 정확하게 알 수 있어서 효율적으로 업데이트 가능.
// EXAMPLE:key로 사용할 고유값이 없을 경우는 map의 두번째 파라미터 index값 이용
// <div>
//  {
//    users.map(
//     (user,index) => (<User user={user} key={index} />
//    )
//  }
// </div>
// 하지만 웬만하면 key에 index는 넣지 않는다.

// REMIND: 배열을 렌더링할 때는 KEY를 설정해야 비로소 효율적으로 렌더링이 가능하다.

export default UserList;
