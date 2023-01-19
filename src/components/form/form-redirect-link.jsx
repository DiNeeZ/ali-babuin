import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  'sign-up': {
    link: '/login',
    text: 'Already have an account?',
    btn: 'Sign In'
  },
  'sign-in': {
    link: '/register',
    text: "Don't have an account?",
    btn: 'Sign Up'
  }
};

const FormRedirectLink = ({ variant }) => {
  return (
    <div className='font-semibold text-neutral-400'>
      {variants[variant].text} {`${' '}`}
      <Link
        to={variants[variant].link}
        className='text-red-500 duration-300 hover:text-red-600'>
        {variants[variant].btn}
      </Link>
    </div>
  );
};

export default FormRedirectLink;
