import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { signOutUser } from '../../../utils/firebase';

const ProfileDropdown = ({ profileOpen, handleClose, name, email }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [profileOpen]);

  const logOut = async () => {
    await signOutUser();
    navigate('/');
  };

  return (
    <div
      className='user-dropdown absolute top-14 right-0  min-w-[296px]
        rounded border border-slate-400/20 bg-white px-2 py-6 shadow-md shadow-slate-700/50'>
      <div className='mb-4 flex flex-col items-start px-4'>
        <div className='mb-4 flex h-10 w-10 items-center'>
          <div
            className='flex h-full w-full items-center justify-center rounded-full bg-red-400 
						text-2xl font-bold  text-white'>
            <span className='pt-1 leading-none'>{name.charAt(0).toUpperCase()}</span>
          </div>
        </div>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <span className='text-sm text-neutral-700/70'>{email}</span>
      </div>
      <ul className='py-1'>
        <li>
          <Link
            to='/'
            className='flex items-center gap-2 rounded px-4 py-2 outline-none duration-150 
              hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <IoSettingsOutline
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>My Account</span>
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='flex items-center gap-2 rounded px-4 py-2 outline-none duration-150 
              hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <BsBagCheck
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>My Order</span>
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='flex items-center gap-2 rounded px-4 py-2 outline-none duration-150 
              hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <AiOutlineHeart
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>Whishlist</span>
          </Link>
        </li>
        <li>
          <Link
            to='/'
            className='flex items-center gap-2 rounded px-4 py-2 outline-none duration-150 
              hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <GrHelp
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>Help</span>
          </Link>
        </li>
        <li>
          <div
            onClick={logOut}
            className='flex cursor-pointer items-center gap-2 rounded px-4 py-2 outline-none 
              duration-150 hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <BiLogOut
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>Log Out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
