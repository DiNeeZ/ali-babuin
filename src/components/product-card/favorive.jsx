import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { products2 } from '../../assets/data';
import AuthRedirectPopup from '../auth-redirect-popup';
import { useDispatch } from 'react-redux';
import { setFavorites } from '../../store/slices/favoriteSlice';
import { updateFavorites } from '../../utils/firebase';
import { async } from '@firebase/util';

const Favorive = ({ id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    const addFavorite = async () => {
      await updateFavorites(id);
    };

    if (currentUser) {
      dispatch(setFavorites(id));
      addFavorite();
    } else {
      setIsPopupOpen(true);
    }
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className='flex w-10 cursor-pointer items-center justify-center gap-2 rounded-md border 
			border-neutral-400 bg-neutral-200 text-neutral-400 outline-none duration-150 
			hover:bg-neutral-400 hover:text-neutral-200 focus:bg-neutral-400 focus:text-neutral-200'>
        <AiOutlineHeart size={21} />
      </div>
      <AuthRedirectPopup
        show={isPopupOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Favorive;
