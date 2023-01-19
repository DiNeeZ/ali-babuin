import React from 'react';

const FormInput = (props) => {
  const label = {
    displayName: 'Enter your name',
    email: 'Enter email',
    password: 'Enter password',
    confirmPassword: 'Confirm Password'
  };

  return (
    <div className='flex flex-col'>
      {props.errors[props.name] ? (
        <label className='mb-2 pl-2 text-sm text-red-500'>{props.errors[props.name]}</label>
      ) : (
        <label className='mb-2 pl-2 text-sm text-neutral-400'>{label[props.name]}</label>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className='rounded border py-3 px-4 shadow-sm outline-none duration-300 focus:shadow-md mobile:w-96'
      />
    </div>
  );
};

export default FormInput;
