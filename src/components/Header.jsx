import { Share } from './Share';

export const Header = ({ handleOpen, setModalTitle, setModalContent }) => {
  return (
    <>
      <div className='flex p-5 bg-[#ffc0cb]'>
        <a href='/'>
          <img className='w-8' src='/gaesae.png' alt='logo' />
        </a>
      </div>
      <Share
        handleOpen={handleOpen}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
      />
    </>
  );
};
