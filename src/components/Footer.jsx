import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10 flex justify-center items-center w-[100%] h-8 text-xs'>
      © 2023 Gaebal-Saebal
      <a
        className='ml-2 no-underline visited:no-underline visited:text-black active:no-underline active:text-black'
        href='https://github.com/gaebal-saebal'
        target='_blank'
      >
        {'<https://github.com/gaebal-saebal>'}
      </a>
    </div>
  );
};

export default Footer;
