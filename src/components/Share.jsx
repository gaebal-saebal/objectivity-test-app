import { Button } from '@mui/material';

export const Share = ({ handleOpen, setModalTitle, setModalContent }) => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`https://gaebal-saebal-objectivitytest.netlify.app`);
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
    <div className='flex justify-end px-10 py-5'>
      <Button
        variant='contained'
        style={{
          marginTop: '2rem',
          width: '85px',
          backgroundColor: '#d4c0ff',
        }}
        onClick={handleShare}
      >
        공유하기
      </Button>
    </div>
  );
};
