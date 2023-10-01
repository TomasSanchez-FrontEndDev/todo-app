import { TaskList } from '@/components';
import React from 'react';
import '../app/globals.css';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <section className='mt-14 w-full flex justify-center'>
        <TaskList />
      </section>
    </Layout>
  );
};

export default HomePage;
