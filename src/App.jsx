import React from 'react';
import { Button } from '@mui/material';

// 시작페이지, 문항 컴포넌트 나와야 되는 페이지
function App() {
  return (
    <>
      <div className='flex flex-col items-center h-[100%]'>
        <h1 className='text-3xl font-bold text-center'>객관성 테스트</h1>
        <div className='bg-gray-200 mt-5 p-3'>
          나의 객관성이 얼마나 높은지 알려주는 객관성 테스트입니다. 각 문항마다
          정답이라고 판단되는 것을 체크하시면 됩니다. 검사를 시작하시려면 시작
          버튼을 눌러주세요.
        </div>
        <Button
          variant='contained'
          style={{
            marginTop: '2rem',
            width: '100px',
          }}
        >
          테스트 시작
        </Button>
      </div>
    </>
  );
}

export default App;
