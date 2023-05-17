import { Button } from '@mui/material';

export const Share = () => {
  return (
    <div className='flex justify-end p-5'>
      <Button
        variant='contained'
        style={{
          marginTop: '2rem',
          width: '85px',
        }}
      >
        공유하기
      </Button>
    </div>
  );
};
