import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products2 } from '../../assets/data';
import { getMultipleRandom } from '../../utils';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const YouMayLike = () => {
  const mayLike = useMemo(() => getMultipleRandom(products2, 6), [products2]);
  const [ref, inView] = useInView();
  const control = useAnimation();

  const list = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItem = {
    hide: {
      opacity: 0,
      y: '-100%'
    },
    show: {
      opacity: 1,
      y: 0
    }
  };

  useEffect(() => {
    if (inView) {
      control.start('show');
    }
  }, [inView]);

  return (
    <section>
      <div
        ref={ref}
        className='container'>
        <h2 className='mb-8 text-center text-2xl font-bold'>You May Like</h2>
        <motion.ul
          variants={list}
          initial='hide'
          animate={control}
          className='grid grid-cols-2 gap-4 mobile:grid-cols-3 tablet:grid-cols-6'>
          {mayLike.map((item) => (
            <motion.li
              variants={listItem}
              key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='mb-4 h-24 w-full rounded border object-cover object-center shadow'
              />
              <Link className='text-cyan-600 duration-150 hover:text-cyan-300'>
                <h3>{item.title}</h3>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default YouMayLike;
