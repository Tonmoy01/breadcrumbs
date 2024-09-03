import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="p-3 bg-gray-100 rounded">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2"><svg className="w-6 h-6 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z" />
              </svg>
              </span>
              <Link to={to} className="text-blue-600 capitalize hover:underline">
                {value.replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
