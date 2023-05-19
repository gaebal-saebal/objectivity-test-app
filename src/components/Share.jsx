import { Button } from '@mui/material';

export const Share = () => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`https://gaebal-saebal-objectivitytest.netlify.app`);
      alert('클립보드에 복사됐어요!');
    } catch (e) {
      alert('클립보드 복사가 실패했어요.');
    }
  };
  return (
    <div className='flex justify-end px-10 py-5'>
      <Button
        variant='contained'
        style={{
          marginTop: '2rem',
          width: '85px',
        }}
        onClick={handleShare}
      >
        공유하기
      </Button>
    </div>
  );
};
