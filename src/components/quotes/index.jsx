import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Quotes = () => {
  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({ opacity: 1, x: 0 });
    }
  }, [inView]);

  return (
    <section className='mb-8 py-8'>
      <div className='container'>
        <h2
          className='relative mb-8 text-center text-2xl font-semibold 
			    before:absolute before:left-2 before:top-1/2 before:h-[1px] before:w-0 before:bg-neutral-700
			    after:absolute after:right-2 after:top-1/2 after:h-[1px] after:w-0 after:bg-neutral-700
			    mobile:before:w-1/5 mobile:after:w-1/5 tablet:before:w-1/4 tablet:after:w-1/4
			    desktop:before:w-1/3 desktop:after:w-1/3'>
          Words from the Great People
        </h2>
        <div
          ref={ref}
          className='flex flex-col overflow-hidden'>
          <motion.figure
            animate={control}
            initial={{
              opacity: 0,
              x: '100%'
            }}
            transition={{ duration: 1 }}
            className='float-right flex w-full flex-col gap-4 self-end text-left mobile:w-2/3'>
            <blockquote className='rounded bg-neutral-200 px-8 py-4'>
              <p>
                Here's something that's contrary to popular belief: I actually don't like thinking.
                I think people think I like to think a lot. And I don't. I do not like to think at
                all.
              </p>
            </blockquote>
            <figcaption className='self-end text-lg font-medium'>- Kanye West</figcaption>
          </motion.figure>
          <motion.figure
            animate={control}
            initial={{
              opacity: 0,
              x: '-100%'
            }}
            transition={{ duration: 1 }}
            className='float-right flex w-full flex-col gap-4 self-start text-left mobile:w-2/3'>
            <blockquote className='rounded bg-neutral-200 px-8 py-4'>
              <p>
                The only happy artist is a dead artist, because only then you can’t change. After I
                die, I’ll probably come back as a paintbrush
              </p>
            </blockquote>
            <figcaption className='self-end text-lg font-medium'>- Sylvester Stallone</figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
