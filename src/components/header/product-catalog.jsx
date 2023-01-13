import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import Portal from '../portal';
import { categories } from '../../assets/data';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const disableTabKey = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
      }
    };
    const closeOnEscKey = (e) => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    };
    show && document.addEventListener('keydown', disableTabKey);
    show && document.addEventListener('keydown', closeOnEscKey);
    show && (document.body.style.overflow = 'hidden');
    show && window.scrollTo(0, 0);
    !show && (document.body.style.overflow = 'unset');

    return () => {
      show && document.removeEventListener('keydown', disableTabKey);
      show && document.removeEventListener('keydown', closeOnEscKey);
    };
  }, [show]);

  const overlay = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className='flex items-end gap-2 rounded-sm bg-cyan-600 p-2 text-white
				outline-none duration-150 hover:opacity-90 focus:opacity-90'>
        <BsFillGrid3X3GapFill />
        <span className='hidden leading-none tablet:block'>Product Catalog</span>
      </button>
      <AnimatePresence>
        {show && (
          <Portal wrapperId='root-overlay'>
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={overlay}
              className='absolute inset-0 z-50'>
              <div
                className='absolute inset-0 h-full w-full bg-neutral-800/95'
                onClick={() => setShow(false)}
              />
              <div className='mx-auto h-full w-full mobile:mt-8 mobile:h-[75vh] mobile:w-[90%] tablet:w-[80%]'>
                <motion.div
                  initial={{
                    x: '-100%',
                    opacity: 0
                  }}
                  animate={{
                    x: 0,
                    opacity: 1
                  }}
                  exit={{
                    x: '-100%',
                    opacity: 1
                  }}
                  transition={{
                    type: 'just',
                    duration: 0.3
                  }}
                  className='relative h-full overflow-y-scroll rounded-md bg-white p-8 mobile:overflow-auto'>
                  <ul className='focus:bg-green-400 mobile:columns-2 '>
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className='mb-2 font-medium uppercase'>
                        <Link
                          onClick={() => setShow(false)}
                          className='group/category-link relative inline-flex w-3/4 items-center rounded-lg px-6 py-2 duration-150 
                          hover:bg-neutral-400/25 focus:bg-neutral-400/25 tablet:py-3'
                          to={`/products/${category.title}`}>
                          {
                            <category.icon
                              size={30}
                              className='mr-4 text-red-600'
                            />
                          }
                          <span>{category.title.replace('-', ' ')}</span>
                          <HiOutlineArrowLongRight
                            size={20}
                            className='absolute top-1/2 right-4 -translate-x-[300%] -translate-y-1/2 opacity-0 duration-500 
                            desktop:group-hover/category-link:translate-x-0 desktop:group-hover/category-link:opacity-100'
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    className='absolute top-4 right-4 rounded-full border bg-neutral-200/50 
									  p-1 text-neutral-700 outline-none duration-150 hover:bg-neutral-200 focus:border-neutral-700'
                    onClick={() => setShow(false)}>
                    <IoMdClose size={25} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCatalog;
