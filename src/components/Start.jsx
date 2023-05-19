import { Button } from '@mui/material';
import * as Q from '../../constants/';

export const Start = ({ step, onClick }) => {
  return (
    <div className={step === 0 ? 'flex' : 'hidden'}>
      <div className='flex flex-col items-center h-[100%] px-10'>
        <h1 className='mb-16 text-3xl font-bold text-center'>{Q.question001.testName}</h1>
        <div className='graybox'>{Q.question001.description}</div>
        <Button
          variant='contained'
          style={{
            marginTop: '2rem',
            width: '100px',
          }}
          onClick={onClick}
        >
          테스트 시작
        </Button>
      </div>
    </div>
  );
};
