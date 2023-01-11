import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

const HeroSlider = ({ children }) => {
  return (
    <div className='relative'>
      <div className='flex'>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          autoplay={{
            delay: 2000
          }}
          loop={true}
          slidesPerView={1}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev'
          }}>
          {Children.map(children, (child) => {
            return <SwiperSlide>{child}</SwiperSlide>;
          })}
        </Swiper>
      </div>
      <button
        className='review-swiper-button-prev absolute top-1/2 -left-12 hidden -translate-y-1/2 opacity-60
        hover:opacity-80 tablet:block'>
        <BsChevronCompactLeft size={40} />
      </button>
      <button
        className='review-swiper-button-next absolute top-1/2 -right-12 hidden -translate-y-1/2 opacity-60
        hover:opacity-80 tablet:block'>
        <BsChevronCompactRight size={40} />
      </button>
    </div>
  );
};

export default HeroSlider;
