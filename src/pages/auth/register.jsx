import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormInput from '../../components/form/form-input';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase';
import { registerValidate } from '../../utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    const register = async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          // Creating user by email and password
          const { user } = await createAuthUserWithEmailAndPassword(email, password);
          await createUserDocumentFromAuth(user, { displayName });
          // If registration has been succesfull, then redirect to home page
          navigate('/');
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            setErrors({
              ...errors,
              email: `User with this email is already exist`
            });
          }
          console.log('error creating a user', error.message);
        }
      }
    };

    register();
  }, [errors, isSubmitting, email, password, formFields, displayName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(registerValidate(formFields));
    setIsSubmitting(true);
  };

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
        <div className='mx-auto w-full rounded-xl p-4 mobile:w-[80%] mobile:bg-neutral-100/50 mobile:shadow-md'>
          <h1 className='text-center text-3xl font-bold uppercase tracking-widest mobile:pt-6'>
            Register
          </h1>
          <form
            onSubmit={handleSubmit}
            noValidate={true}
            className='flex flex-col items-center gap-6 py-4 mobile:py-16'>
            <FormInput
              errors={errors}
              type='text'
              placeholder='Name'
              name='displayName'
              value={displayName}
              onChange={handleChange}
            />

            <FormInput
              errors={errors}
              type='email'
              placeholder='email'
              name='email'
              value={email}
              onChange={handleChange}
            />

            <div className='flex flex-col'>
              {errors.password ? (
                <label className='mb-2 pl-2 text-sm text-red-500'>{errors.password}</label>
              ) : (
                <label className='mb-2 pl-2 text-sm text-neutral-400'>Enter password</label>
              )}
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChange}
                className='rounded border py-3 px-4 shadow-sm outline-none duration-300 focus:shadow-md mobile:w-96'
              />
            </div>
            <div className='flex flex-col'>
              {errors.confirmPassword ? (
                <label className='mb-2 pl-2 text-sm text-red-500'>{errors.confirmPassword}</label>
              ) : (
                <label className='mb-2 pl-2 text-sm text-neutral-400'>Confirm password</label>
              )}
              <input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                className='rounded border py-3 px-4 shadow-sm outline-none duration-300 focus:shadow-md mobile:w-96'
              />
            </div>
            <button
              type='submit'
              className='rounded bg-cyan-600 px-12 py-2 text-lg font-semibold text-white outline-none 
              duration-300 hover:bg-cyan-600/80 focus:translate-y-1 focus:bg-cyan-600/80'>
              Register
            </button>
          </form>
          <div className='font-semibold text-neutral-400'>
            Already have an account? {`${' '}`}
            <Link
              to='/login'
              className='text-red-500 duration-300 hover:text-red-600'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Register;
