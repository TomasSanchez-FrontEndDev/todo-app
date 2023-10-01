'use client';
import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import { FaBars, FaTimes } from 'react-icons/fa';

const ProfileBar = () => {
  const [openBar, setOpenBar] = useState(false);

  const openCloseBar = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className='w-1/2 bg-gray h-auto rounded-b-xl'>
      <div
        className={`transition-height transition-widht duration-1000 ${
          openBar ? 'h-24' : 'h-0'
        } overflow-hidden`}
      >
        <ProfileInfo />
      </div>
      <ButtonBar openCloseBar={openCloseBar} isOpen={openBar} />
    </div>
  );
};

export default ProfileBar;

interface ButtonBarProps {
  openCloseBar: () => void;
  isOpen: boolean;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ openCloseBar, isOpen }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-2'>
      <div className='hamburger-icon cursor-pointer' onClick={openCloseBar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  );
};
