import { useEffect } from 'react';
import monkeyImage from '../../assets/images/monkey-think.jpg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Filler = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }, [inView]);

  return (
    <section className='my-8 bg-neutral-200 py-8'>
      <div className='container'>
        <div
          ref={ref}
          className='flex flex-col-reverse justify-around gap-4 overflow-hidden small:flex-row'>
          <motion.div
            initial={{
              x: '-200%',
              opacity: 0
            }}
            animate={control}
            className='flex items-center justify-center'>
            <p className='text-lg font-normal mobile:text-xl mobile:font-bold'>
              Ape food
              <br />
              Bamboo shoots and fresh fruits
              <br />
              Termite larvae
              <br />
              Listen what the god say
              <br />
              Sing a sad song like Sade
              <br />
              (I'ma eat your food like this fu***r an entree, P!)
            </p>
          </motion.div>

          <motion.div
            initial={{
              x: '200%',
              opacity: 0
            }}
            animate={control}
            className='w-full mobile:w-1/3'>
            <img
              src={monkeyImage}
              alt='thinking monkey'
              className='rounded-xl shadow-lg shadow-black/50'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Filler;
