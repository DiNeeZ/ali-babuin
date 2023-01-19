import { useState } from 'react';
import ProfileDropdown from './profile-dropdown';

const Profile = ({ user }) => {
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
          className='flex h-8 w-8 cursor-pointer items-center p-[1px]'
          onClick={() => setProfileOpen(!profileOpen)}>
          <div
            className='flex h-full w-full items-center justify-center 
            rounded-full bg-red-400 font-bold text-white'>
            {user.displayName.charAt(0).toUpperCase()}
          </div>
        </div>
        {profileOpen && (
          <ProfileDropdown
            name={user.displayName}
            email={user.email}
            profileOpen={profileOpen}
            handleClose={() => setProfileOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Profile;
