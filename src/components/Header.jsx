import { Share } from './Share';

export const Header = () => {
  return (
    <>
      <div className='p-5 bg-gray-300'>
        <img className='w-8' src='/gaesae.png' alt='logo' />
      </div>
      <Share />
    </>
  );
};
