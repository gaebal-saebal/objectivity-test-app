import { Button } from '@mui/material';
import { question001 } from '../../constants';
import { Question } from './Question';

export const Test = () => {
  return (
    <div>
      <div>문항 진행정도</div>
      <div className='bg-gray-200 mt-5 p-3'>{question001.questionExample}</div>
      <Question />
      <div>
        <Button
          variant='contained'
          style={{
            marginTop: '2rem',
            width: '70px',
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
