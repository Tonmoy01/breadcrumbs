import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='relative'>
      <Link to='/some-page' className='absolute top-0 right-0 px-10 py-5 bg-green-300'>Some Page</Link>
      <h1>Home Page</h1>
      <p>Welcome to the home page! This is where the main content of your website starts.</p>
    </div>
  );
};

export default HomePage;
