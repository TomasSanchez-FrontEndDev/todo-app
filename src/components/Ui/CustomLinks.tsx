// components/layout/Layout.tsx
import React from 'react';
import { useRouter } from 'next/router';
import CustomLink from './CustomLink';

const CustomLinks = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <section className='w-full'>
      <div className='w-full flex justify-around'>
        {currentPath === '/dashboard' && (
          <div className='w-full justify-around flex'>
            <CustomLink
              ImgLink='/icon/Home.svg'
              RefLink='/'
              TextLink='Home'
              ClassLink='-mt-6 px-4'
            />
            <CustomLink
              ImgLink='/icon/History.svg'
              RefLink='/history'
              TextLink='History'
              ClassLink='-mt-6 px-4'
            />
          </div>
        )}
        {currentPath === '/history' && (
          <div className='w-full justify-around flex'>
            <CustomLink
              ImgLink='/icon/Home.svg'
              RefLink='/'
              TextLink='Home'
              ClassLink='-mt-6 px-4'
            />
            <CustomLink
              ImgLink='/icon/Dashboard.svg'
              RefLink='/dashboard'
              TextLink='Dashboard'
              ClassLink='-mt-6 px-4'
            />
          </div>
        )}
        {currentPath === '/' && (
          <div className='w-full justify-around flex'>
            <CustomLink
              ImgLink='/icon/Dashboard.svg'
              RefLink='/dashboard'
              TextLink='Dashboard'
              ClassLink='-mt-6 px-4'
            />
            <CustomLink
              ImgLink='/icon/History.svg'
              RefLink='/history'
              TextLink='History'
              ClassLink='-mt-6 px-4'
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomLinks;
