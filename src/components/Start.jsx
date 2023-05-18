import { Button } from '@mui/material';
import * as Q from '../../constants/';

export const Start = ({ step, onClick }) => {
  return (
    <div className={step === 0 ? 'flex' : 'hidden'}>
      <div className='flex flex-col items-center h-[100%] '>
        <h1 className='text-3xl font-bold text-center'>{Q.question001.testName}</h1>
        <div className='p-3 mt-5 bg-gray-200'>{Q.question001.description}</div>
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
