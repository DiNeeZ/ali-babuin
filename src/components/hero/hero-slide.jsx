import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ClickMeIcon } from '../../assets/images/click-me.svg';
import { ReactComponent as Monkey } from '../../assets/images/monkey.svg';

const HeroSlide = ({ title, urlParam, imgUrl }) => {
  return (
    <div className='relative flex h-56 w-full justify-end overflow-hidden mobile:h-72 tablet:h-96  desktop:h-[480px]'>
      <Monkey className='absolute left-0 bottom-0 hidden tablet:block' />
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
				tablet:left-36 tablet:-translate-x-0'>
        <ClickMeIcon
          className='absolute top-0 left-3/4 h-auto w-24 -translate-y-full
					select-none  mobile:w-36 tablet:w-52 desktop:w-72'
        />
        <Link
          to={`/products/${urlParam}`}
          tabIndex={-1}
          className='flex items-center justify-center rounded bg-red-500
					px-2 py-1 shadow-md shadow-neutral-600/50 duration-150 hover:bg-red-400 
					mobile:px-4 mobile:py-2 tablet:px-6 tablet:py-3 desktop:px-8 desktop:py-4'>
          <span
            className='text-md whitespace-nowrap font-bold text-white mobile:text-xl 
						tablet:text-2xl desktop:text-4xl'>
            {title.toUpperCase()}
          </span>
        </Link>
      </div>
      <img
        className='h-full w-full rounded-md object-cover object-center tablet:w-3/4'
        src={imgUrl}
        alt='slide'
      />
    </div>
  );
};

export default HeroSlide;
