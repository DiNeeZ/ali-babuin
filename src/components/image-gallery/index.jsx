import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import './styles.css';

const ImageGalerry = ({ images }) => {
  const [currIdx, setCurrIdx] = useState(0);

  const getKey = (str) => {
    const lastTwoElements = str
      .replace(/(.png|.jpg)/i, '')
      .split('/')
      .slice(-2);
    return `img-${lastTwoElements[0]}-${lastTwoElements[1]}`;
  };

  const handleClick = (e) => setCurrIdx(+e.target.getAttribute('data-index'));

  return (
    <div className='image-gallery'>
      <div className='relative mb-6 w-full overflow-hidden pt-[56.25%] shadow-xl'>
        <div className='absolute inset-0 flex h-auto w-full items-center justify-center'>
          <img
            src={images[currIdx]}
            alt='main'
            className='h-full object-cover object-center'
          />
        </div>
      </div>
      <Swiper
        modules={[Scrollbar]}
        slidesPerView='auto'
        spaceBetween={10}
        scrollbar={{
          draggable: true
        }}
        className='pb-4'>
        {images.map((image, idx) => {
          return (
            <SwiperSlide
              onClick={handleClick}
              className={`h-24 w-40 cursor-pointer border-4 ${
                currIdx === idx ? 'border-red-400' : 'border-gray-100 hover:border-gray-300'
              }`}
              key={getKey(image)}>
              <div className='h-full w-full'>
                <img
                  data-index={idx}
                  src={image}
                  alt={`product-${idx + 1}`}
                  className='h-full w-full object-cover object-center'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageGalerry;
