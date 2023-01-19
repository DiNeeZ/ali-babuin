import React from 'react';
import FormRedirectLink from './form-redirect-link';
import SubmitButton from './submit-button';

const variants = {
  'sign-up': 'Register',
  'sign-in': 'Login'
};

const FormContainer = ({ children, variant, handleSubmit }) => {
  return (
    <div className='container'>
      <div className='mx-auto w-full rounded-xl p-4 mobile:w-[80%] mobile:bg-neutral-100/50 mobile:shadow-md'>
        <h1 className='text-center text-3xl font-bold uppercase tracking-widest mobile:pt-6'>
          {variants[variant]}
        </h1>
        <form
          onSubmit={handleSubmit}
          noValidate={true}
          className='flex flex-col items-center gap-6 py-4 mobile:py-16'>
          {children}
          <SubmitButton>{variants[variant]}</SubmitButton>
        </form>
        <FormRedirectLink variant={variant} />
      </div>
    </div>
  );
};

export default FormContainer;
