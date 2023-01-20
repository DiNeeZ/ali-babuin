import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormContainer from '../../components/form/form-container';
import FormInput from '../../components/form/form-input';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import { loginValidate } from '../../utils';

const defaultFormFields = {
  email: '',
  password: ''
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser);

  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate('/');
      return;
    }

    const login = async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          await signInAuthUserWithEmailAndPassword(email, password);
          navigate('/');
        } catch (error) {
          switch (error.code) {
            case 'auth/user-not-found':
              setErrors({
                ...errors,
                email: 'No user associated with this email'
              });
              break;

            case 'auth/wrong-password':
              setErrors({
                ...errors,
                password: 'Incorrect password for email'
              });
              break;

            default:
              console.log('login error', error.message);
              break;
          }
        }
      }
    };

    login();
  }, [errors, formFields, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidate(formFields));
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
        variant='sign-in'
        handleSubmit={handleSubmit}>
        <FormInput
          errors={errors}
          type='email'
          placeholder='Email'
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
      </FormContainer>
    </motion.section>
  );
};

export default Login;
