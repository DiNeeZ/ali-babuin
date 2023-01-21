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
      <div className='-mt-8 flex min-h-[calc(100vh_-_125px)] flex-col items-center justify-center'>
        <div className='rounded-xl p-4 mobile:bg-neutral-100/50 mobile:shadow-md'>
          <h1 className='text-center text-2xl font-bold uppercase tracking-widest mobile:pt-1'>
            {variants[variant]}
          </h1>
          <form
            onSubmit={handleSubmit}
            noValidate={true}
            className='flex flex-col items-center gap-2 py-1 mobile:pb-8'>
            {children}
            <SubmitButton>{variants[variant]}</SubmitButton>
          </form>
          <FormRedirectLink variant={variant} />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
