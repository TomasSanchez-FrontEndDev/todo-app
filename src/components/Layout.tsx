import React, { ReactNode } from 'react';
import { ProfileBar } from '.';
import CustomLinks from './Ui/CustomLinks';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen w-full flex-col items-center relative bg-navy'>
      <section className='w-full flex justify-center items-center bg-gradient-to-r from-primary to-secondary pb-32'>
        <ProfileBar />
      </section>
      <CustomLinks />
      <section className='w-full flex justify-around'>{children}</section>
    </main>
  );
};

export default Layout;
