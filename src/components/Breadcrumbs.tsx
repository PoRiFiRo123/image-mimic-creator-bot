
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  paths: { name: string; path: string }[];
  currentPage: string;
}

const Breadcrumbs = ({ paths, currentPage }: BreadcrumbsProps) => {
  return (
    <div className="flex justify-between items-center py-4 text-white">
      <div className="flex items-center space-x-2">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <Link to={path.path} className="hover:underline">
              {path.name}
            </Link>
            <span className="mx-2">/</span>
          </React.Fragment>
        ))}
        <span className="font-normal">{currentPage}</span>
      </div>
      <Link to="#" className="hover:underline">
        BACK
      </Link>
    </div>
  );
};

export default Breadcrumbs;
