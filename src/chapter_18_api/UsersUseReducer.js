import React, { useEffect, useReducer } from "react";
import axios from "axios";

//useReducer로 요청 상태 관리: 액션에 따라 상태를 다르게 처리
// useState 의 setState 함수를 여러번 사용하지 않아도 된다는점과,
// 리듀서로 로직을 분리했으니 다른곳에서도 쉽게 재사용을 할 수 있다는 점이 장점.
//loading, success, error의 세가지 액션을 관리
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

//상황에 맞게 액션을 dispatch
function UsersUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //users, loading, error의 세 가지 상태에 따라 다른 결과물을 렌더링한다.
  // state.data 를 users 키워드로 조회
  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  //로딩 중은 끝났는데 아직 users의 값이 유효하지 않은 상태라면 return null로
  //아무것도 안보여지게 함.
  if (!users) return null;

  //여기서는 users배열이 유효함.
  return (
    <>
      <ul>
        {users.map((user) => (
          // key 값을 꼭 넣어준다.
          <li key={user.id}>
            {users.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}></button>
    </>
  );
}

export default UsersUseReducer;
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
