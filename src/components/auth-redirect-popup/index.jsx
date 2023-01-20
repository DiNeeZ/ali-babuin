import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import Portal from '../portal';
import logo from '../../assets/images/logo.svg';

const AuthRedirectPopup = ({ handleClose, show }) => {
  useEffect(() => {
    const closeOnBgClick = (e) => {
      if (e.target.classList.contains('auth-redirect-overlay')) {
        handleClose();
      }
    };

    const closeOnEscKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    document.body.addEventListener('click', closeOnBgClick);
    document.body.addEventListener('keydown', closeOnEscKey);

    return () => {
      document.body.removeEventListener('click', closeOnBgClick);
      document.body.removeEventListener('keydown', closeOnEscKey);
    };
  }, []);

  useEffect(() => {
    show && (document.body.style.overflow = 'hidden');
    !show && (document.body.style.overflow = 'unset');
  }, [show]);

  const popup = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  };

  const overlay = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {show ? (
        <Portal wrapperId='redirect-popup'>
          <motion.div
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={overlay}
            transition={{
              type: 'just',
              duration: 0.3
            }}
            className='auth-redirect-overlay fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black/50'>
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={popup}
              transition={{
                type: 'just',
                duration: 0.3
              }}
              className='max-w-lg overflow-hidden rounded-md bg-neutral-50 '>
              <div className='flex w-full items-center justify-end bg-neutral-600 py-2'>
                <button
                  className='top-2 right-2 mr-2 rounded-full text-white outline-none duration-150'
                  onClick={handleClose}>
                  <IoMdClose size={20} />
                </button>
              </div>

              <div className='flex flex-col items-center'>
                <img
                  src={logo}
                  alt='ali babuin logo'
                  className='w-1/2 pt-6 pb-10'
                />

                <div className='text-center'>
                  <h4 className='text-2xl font-bold text-neutral-700'>Register now, it's free!</h4>
                  <p className='px-20 py-6'>
                    This feature is avaliable only for registered users. Please sign in or register.
                    It's totaly free!
                  </p>
                </div>
                <div className='border-t py-6'>
                  <div className='flex flex-col items-center gap-6'>
                    <Link
                      to='/register'
                      className='rounded bg-cyan-600/90 px-4 py-2 font-semibold uppercase 
											text-white duration-150 hover:bg-cyan-600'>
                      Register Now
                    </Link>
                    <Link
                      to='/login'
                      className='font-semibold uppercase text-cyan-600 duration-150 hover:text-cyan-600/90'>
                      Already have an account?
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Portal>
      ) : null}
    </AnimatePresence>
  );
};

export default AuthRedirectPopup;
