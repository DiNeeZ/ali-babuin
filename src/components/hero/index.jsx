import React from 'react';
import { sliderData } from '../../assets/data';
import HeroSlide from './hero-slide';
import HeroSlider from './hero-slider';

const Hero = () => {
  return (
    <section className='tablet:mt-8 tablet:mb-16'>
      <div className='container'>
        <HeroSlider>
          {sliderData.map((slide) => {
            const { id, title, urlParam, imgUrl } = slide;
            return (
              <HeroSlide
                key={id}
                title={title}
                urlParam={urlParam}
                imgUrl={imgUrl}
              />
            );
          })}
        </HeroSlider>
      </div>
    </section>
  );
};

export default Hero;
