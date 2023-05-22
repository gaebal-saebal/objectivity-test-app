import React from 'react';
import { Button } from '@mui/material';
import resultArr from '../../constants/result';
import { useParams } from 'react-router-dom';

//TODO : 배포 페이지는 결과 공유가 안됨 Not found
//TODO : 배포 페이지는 백그라운드 이미지 적용 안됨
//TODO : 선택지 버튼 효과 줘야 됨

const Result = ({ handleOpen, setModalTitle, setModalContent }) => {
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
      setModalTitle('알림');
      setModalContent('복사 성공! 원하시는 곳에 붙여넣어주세요.');
      handleOpen(true);
    } catch (e) {
      setModalTitle('오류');
      setModalContent('브라우저의 클립보드 접근 권한을 설정해주시거나 관리자에게 문의해주세요.');
      handleOpen(true);
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
        <Button
          variant='outlined'
          style={{ marginRight: '0.5rem', border: '1px solid #7c43f8', color: '#7c43f8' }}
        >
          <a href='/'>테스트 다시하기</a>
        </Button>
        <Button
          variant='outlined'
          onClick={handleShare}
          style={{ border: '1px solid #7c43f8', color: '#7c43f8' }}
        >
          결과 공유하기
        </Button>
      </div>
    </div>
  );
};

export default Result;
