import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { brands } from '../../assets/data';
import './styles.css';

const Brands = () => {
  return (
    <section className='mb-8'>
      <div className='brands'>
        <h2 className='mb-4 text-center text-2xl font-bold'>A brands you can find here</h2>
        <div className=''>
          <Swiper
            allowTouchMove={false}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 3
              },
              960: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 8
              }
            }}
            loop={true}
            slidesPerView={2}
            speed={30000}>
            {brands.first.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div
                  className='my-6 flex h-32 w-full items-center justify-center rounded-lg p-2
                  shadow-md shadow-slate-700/30'>
                  <img
                    src={brand.imgUrl}
                    alt={brand.id.replace('brand-', '')}
                    className='h-full w-auto object-contain px-4 py-2'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=''>
          <Swiper
            allowTouchMove={false}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 3
              },
              960: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 8
              }
            }}
            loop={true}
            slidesPerView={2}
            speed={30000}>
            {brands.second.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div
                  className='my-6 flex h-32 w-full items-center justify-center rounded-lg p-2
                  shadow-md shadow-slate-700/30'>
                  <img
                    src={brand.imgUrl}
                    alt={brand.id.replace('brand-', '')}
                    className='h-full w-auto object-contain px-4 py-2'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
