import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';

const ProfileDropdown = ({ profileOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [profileOpen]);

  return (
    <div
      className='user-dropdown absolute top-14 right-0  min-w-[296px]
        rounded border border-slate-400/20 bg-white px-2 py-6 shadow-md shadow-slate-700/50'>
      <div className='mb-4 flex flex-col items-start px-4'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
          alt='user'
          className='w-10'
        />
        <h2 className='text-lg font-semibold'>Eden Smith</h2>
        <span className='text-sm text-neutral-700/70'>Los Angeles, CA</span>
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
          <Link
            to='/'
            className='flex items-center gap-2 rounded px-4 py-2 outline-none duration-150 
              hover:bg-neutral-400/30 focus:bg-neutral-400/30'>
            <BiLogOut
              size={20}
              className='text-neutral-900'
            />
            <span className='text-sm'>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Profile = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSpacebarDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      setProfileOpen(true);
    }
  };

  return (
    <>
      {profileOpen && (
        <div
          className='overlay absolute inset-0'
          onClick={() => setProfileOpen(false)}
        />
      )}
      <div
        tabIndex={0}
        className='relative z-20 outline-none'
        onKeyDown={handleSpacebarDown}>
        <div
          className='flex h-8 w-8 cursor-pointer items-center'
          onClick={() => setProfileOpen(!profileOpen)}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
            alt='user'
          />
        </div>
        {profileOpen && (
          <ProfileDropdown
            profileOpen={profileOpen}
            handleClose={() => setProfileOpen(false)}
          />
        )}
      </div>
    </>
  );
};

const User = () => {
  const navigate = useNavigate();
  const user = true;

  return (
    <>
      {user ? (
        <Profile />
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
