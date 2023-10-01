import React from 'react';
import { ProfileBar, TaskList } from '.';

const HomePage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center relative'>
      <section className='w-full flex justify-center items-center bg-gradient-to-r from-primary to-secondary pb-32'>
        <ProfileBar />
      </section>
      <section className='mt-14 w-full flex justify-center'>
        <TaskList />
      </section>
    </main>
  );
};

export default HomePage;
