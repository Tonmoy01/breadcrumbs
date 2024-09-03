import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const SomeOtherPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Breadcrumbs />
      <h1>Detail Page</h1>
      <p>You are viewing the details for item with ID: {id}</p>
    </div>
  );
};

export default SomeOtherPage;
