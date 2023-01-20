import { useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

import Profile from './profile';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/slices/userSlice';

const User = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <>
      {user ? (
        <Profile user={user} />
      ) : (
        <div
          className='cursor-pointer p-1.5'
          onClick={() => navigate('/login')}>
          <FiUser size={20} />
        </div>
      )}
    </>
  );
};

export default User;
