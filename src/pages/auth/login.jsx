import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.section
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}>
      <div className='container'>
        <div className='mx-auto w-[80%] rounded-xl bg-neutral-100/50 p-4 shadow-md'>
          <h1 className='pt-6 text-center text-3xl font-bold uppercase tracking-widest'>Login</h1>
          <form
            noValidate={true}
            className='flex flex-col items-center gap-6 py-16'>
            <div className='flex flex-col'>
              <label className='mb-2 pl-2 text-neutral-400'>Enter e-mail address</label>
              <input
                type='email'
                placeholder='Email'
                className='w-96 rounded border py-3 px-4 shadow-sm outline-none duration-300 focus:shadow-md'
              />
            </div>
            <div className='flex flex-col'>
              <label className='mb-2 pl-2 text-neutral-400'>Enter password</label>
              <input
                type='password'
                placeholder='Password'
                className='w-96 rounded border py-3 px-4 shadow-sm outline-none duration-300 focus:shadow-md'
              />
            </div>
            <button
              className='rounded bg-cyan-600 px-12 py-2 text-lg font-semibold text-white outline-none 
							duration-300 hover:bg-cyan-600/80 focus:translate-y-1 focus:bg-cyan-600/80'>
              Login
            </button>
          </form>
          <div className='font-semibold text-neutral-400'>
            Don't have an account? {`${' '}`}
            <Link
              to='/register'
              className='text-red-500 duration-300 hover:text-red-600'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Login;
