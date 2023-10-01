import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
  return (
    <div className='px-4 py-3 flex justify-between'>
      <UserData />
      <TypeUser />
    </div>
  );
};

export default ProfileInfo;

const UserData = () => {
  const UserImage = '/Img/UserImage.jpg';
  const UserName = 'Tomas Sanchez';
  const UserStatus = 'Hiper-Active';
  return (
    <section className='w-3/5 flex items-center'>
      <div className='w-[80px] h-[80px] rounded-full overflow-hidden'>
        <Image
          src={UserImage}
          alt='User Image'
          width={80}
          height={80}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='text-white font-semibold ml-3'>
        <p>Name: {UserName}</p>
        <p>Status: {UserStatus}</p>
      </div>
    </section>
  );
};

const TypeUser = () => {
  return (
    <div className='items-center flex flex-col justify-center'>
      <p className='font-semibold'>Type of Porfile:</p>
      <Image
        src='/Img/Mr.IncreibleGod.png'
        alt='User Image'
        width={40}
        height={40}
        className='mt-1'
      />
    </div>
  );
};
