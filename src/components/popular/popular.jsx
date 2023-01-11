import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';
import PopularItem from './popular-item';
import { products2 } from '../../assets/data';
import { getMultipleRandom } from '../../utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

const Popular = () => {
  const popular = getMultipleRandom(products2, 8);
  return (
    <section className='mb-16 bg-neutral-200 pt-8 pb-16'>
      <div className='container'>
        <h2 className='mb-4 text-center text-2xl font-bold'>Most Popular on Last Week</h2>

        <Swiper
          modules={[Navigation, A11y, Pagination]}
          pagination={{
            clickable: true
          }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}>
          {popular.map((item) => (
            <SwiperSlide key={'popular' + item.id}>
              <PopularItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
