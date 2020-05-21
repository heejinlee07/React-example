import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  //요청 결과물 관리
  const [users, setUsers] = useState(null);
  //로딩 상태 관리
  const [loading, setLoading] = useState(false);
  //에러 관리
  const [error, setError] = useState(null);

  //컴포넌트가 처음 렌더링 될 때 axios사용해서 api 요청
  //axios 요청 후 에러 발생하면 catch에 있는 것 실행.
  //에러가 발생하지 않으면 try에 있는 것 실행.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 초기화
        setUsers(null);
        setError(null);
        // 로딩이 시작됨.
        setLoading(true);
        //응답
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //응답의 결과값을 보려면 response.data로 조회.
        setUsers(response.data);
      } catch (e) {
        //status code를 보고싶다면 콘솔에 찍어볼 것.
        console.log(e.response.status);
        setError(e);
      }
      setLoading(false);
    };
    //함수를 만들었으니 호출해줌.
    fetchUsers();
  }, []);

  /**
   * WHY:
   * useEffect를 사용해서 컴포넌트가 가장 처음 렌더링 될 때
   * fetchUsers라는 함수를 호출, users랑 error 값을 초기화 시키고,
   * loading 값을 true로 바꿈.
   * 요청이 성공하면 setUsers를 통해 users의 값을 바꾸고,
   * 에러가 나면 에러 값을 바꾼다.
   * 맨 마지막에는 로딩이 끝났음을 setLoading(false)로 알린다.
   */

  //users, loading, error의 세 가지 상태에 따라 다른 결과물을 렌더링한다.
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  //로딩 중은 끝났는데 아직 users의 값이 유효하지 않은 상태라면 return null로
  //아무것도 안보여지게 함.
  if (!users) return null;

  //여기서는 users배열이 유효함.
  return (
    <ul>
      {users.map((user) => (
        // key 값을 꼭 넣어준다.
        <li key={user.id}>
          {users.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
/*
NOTE:
클라이언트가 서버가 소통할 때 http 메서드 사용
GET: 데이터 조회
POST: 데이터 등록
PUT: 데이터 수정
DELETE: 데이터 제거

import axios from 'axios';
import { useState } from 'react'

axios.get('/users/1');
요청하면 프로미스를 반환한다.

요청상태 관리: useState를 이용 다음의 3가지를 관리
-> 요청의 결과, 로딩 상태, 에러
요청 시작: useEffect를 사용, 컴포넌트가 렌더링되는 시점에 요청 시작
*/
