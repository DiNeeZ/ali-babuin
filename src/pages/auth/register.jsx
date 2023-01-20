import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormContainer from '../../components/form/form-container';
import FormInput from '../../components/form/form-input';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signOutUser
} from '../../utils/firebase';
import { registerValidate } from '../../utils';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';

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
  const currentUser = useSelector(selectUser);

  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate('/');
      return;
    }

    const register = async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          // Creating user by email and password
          const user = await createAuthUserWithEmailAndPassword(email, password);
          await createUserDocumentFromAuth(user, { displayName });
          await signOutUser();
          // If registration has been successful, then redirect to home page
          navigate('/login');
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
  }, [errors, isSubmitting, email, password, formFields, displayName, currentUser]);

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
      <FormContainer
        variant='sign-up'
        handleSubmit={handleSubmit}>
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

        <FormInput
          errors={errors}
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />

        <FormInput
          errors={errors}
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
      </FormContainer>
    </motion.section>
  );
};

export default Register;
