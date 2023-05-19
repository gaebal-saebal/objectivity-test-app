import React from 'react';
import { Button } from '@mui/material';
import resultArr from '../../constants/result';
import { useParams, useLocation } from 'react-router-dom';

//TODO : 총 점수내서 해당되는 결과 페이지로 보내주기
//TODO : 체크한 문항은 실시간으로 갯수 업데이트해주기
//TODO : 체크 안해도 다음 페이지로 넘어가는거 막기
//TODO : 버튼 공유하기 만들기(클립보드 복사 - 메인페이지)
//TODO : 결과페이지는 테스트 결과 공유하기로..!

const Result = () => {
  let params = useParams();
  const id = params.id;

  const location = useLocation();
  const score = location.state.value;

  return (
    <div>
      <div>당신의 객관성 수치는?</div>
      <div>{score}%</div>
      <div>{resultArr[id].imogi}</div>
      <div>{resultArr[id].level}</div>
      <div>{resultArr[id].summary}</div>
      <div>
        심리학에서 인간은 대부분 선택적 지각을 한다고 합니다. 선택적 지각은 자신이 접하는 객관적인
        정보가 아무리 많아도 그중에 자신이 관심을 가지는 주관적인 정보만을 받아들이는것을 말합니다.
        객관성 수치가 높을수록 정보를 객관적으로 바라보는 능력이 뛰어납니다.
      </div>
      <Button variant='outlined'>테스트 다시하기</Button>
      <Button variant='outlined'>결과 공유하기</Button>
    </div>
  );
};

export default Result;
