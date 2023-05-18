import React from 'react';
import { Button } from '@mui/material';

const Result = () => {
  return (
    <div>
      <div>당신의 객관성 수치는?</div>
      <div>수치</div>
      <div>🥹</div>
      <div>(큰일남)</div>
      <div>어쩌구 낮아</div>
      <div>
        심리학에서 인간은 대부분 선택적 지각을 한다고 합니다. 선택적 지각은
        자신이 접하는 객관적인 정보가 아무리 많아도 그중에 자신이 관심을 가지는
        주관적인 정보만을 받아들이는것을 말합니다. 객관성 수치가 높을수록 정보를
        객관적으로 바라보는 능력이 뛰어납니다.
      </div>
      <Button variant='outlined'>테스트 다시하기</Button>
      <Button variant='outlined'>결과 공유하기</Button>
    </div>
  );
};

export default Result;
