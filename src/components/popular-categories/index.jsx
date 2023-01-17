import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../assets/data';
import { getMultipleRandom } from '../../utils';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PopularCategories = () => {
  const popularCategories = useMemo(() => getMultipleRandom(categories, 8), [categories]);
  const [ref, inView] = useInView();
  const control = useAnimation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
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
        className='container mb-8'>
        <h2 className='mb-8 text-center text-2xl font-bold'>Popular Categories</h2>
        <motion.ul
          animate={control}
          initial='hidden'
          variants={container}
          className='grid grid-cols-1 gap-4 
          mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4'>
          {popularCategories.map((category) => (
            <motion.li
              variants={item}
              key={category.id}
              className='group/category relative z-0 cursor-pointer overflow-hidden rounded-lg shadow-xl'>
              <Link
                className='group/link'
                to={`/categories/${category.title}`}>
                <h3
                  className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
                  rounded border border-white/30 bg-white/40 px-6 py-3 text-lg font-black
                  uppercase tracking-wide text-neutral-900 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
                  duration-1000 group-hover/category:bg-white/75 group-focus/link:bg-white/75'>
                  {category.title.replace('-', ' ')}
                </h3>

                <img
                  src={category.image}
                  alt={category.title}
                  className='transition-transform duration-1000 group-hover/category:scale-110 group-focus/link:scale-110'
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default PopularCategories;
