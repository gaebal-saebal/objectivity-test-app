import React from 'react';
import { Button } from '@mui/material';
import resultArr from '../../constants/result';
import { useParams } from 'react-router-dom';

//TODO : 총 점수내서 해당되는 결과 페이지로 보내주기 -> ok
//TODO : 체크한 문항은 실시간으로 갯수 업데이트해주기
//TODO : 체크 안해도 다음 페이지로 넘어가는거 막기
//TODO : 버튼 공유하기 만들기(클립보드 복사 - 메인페이지) -> ok
//TODO : 결과페이지는 테스트 결과 공유하기로..! -> ok
//TODO : 테스트다시하기 버튼 만들기 -> ok

const Result = () => {
  let params = useParams();
  let id = '';
  if (0 <= params.id && params.id <= 20) {
    id = '0';
  } else if (21 <= params.id && params.id <= 40) {
    id = '1';
  } else if (41 <= params.id && params.id <= 60) {
    id = '2';
  } else if (61 <= params.id && params.id <= 80) {
    id = '3';
  } else {
    id = '4';
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://gaebal-saebal-objectivitytest.netlify.app/result/${params.id}`
      );
      alert('클립보드에 복사됐어요!');
    } catch (e) {
      alert('클립보드 복사가 실패했어요.');
    }
  };

  return (
    <div className='px-10'>
      <div className='font-bold'>당신의 객관성 수치는?</div>
      <div className='text-5xl text-center mt-10'>{params.id}%</div>
      <div className='text-center mt-5'>{resultArr[id].imogi}</div>
      <div className='text-center mt-2 font-semibold'>({resultArr[id].level})</div>
      <div className='graybox text-red-500 font-bold'>{resultArr[id].summary}</div>
      <div className='flex flex-col items-center mb-14'>
        <span>심리학에서 인간은 대부분 선택적 지각을 한다고 합니다. </span>
        <span>선택적 지각은 자신이 접하는 객관적인 정보가 아무리 많아도</span>
        <span>그중에 자신이 관심을 가지는 주관적인 정보만을 받아들이는것을 말합니다.</span>
        <span>객관성 수치가 높을수록 정보를 객관적으로 바라보는 능력이 뛰어납니다.</span>
      </div>
      <div className='flex justify-center'>
        <Button variant='outlined' style={{ marginRight: '0.5rem' }}>
          <a href='/'>테스트 다시하기</a>
        </Button>
        <Button variant='outlined' onClick={handleShare}>
          결과 공유하기
        </Button>
      </div>
    </div>
  );
};

export default Result;
