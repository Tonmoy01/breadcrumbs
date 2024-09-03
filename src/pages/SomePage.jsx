import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';

const SomePage = () => {
  return (
    <div className='relative'>
      <Breadcrumbs />
      <Link to='/some-page/1' className='absolute top-0 right-0 px-10 py-5 bg-slate-500'>Other page</Link>
      <h1>Some Page</h1>
      <p>Page content goes here...</p>
    </div>
  );
};

export default SomePage;
