import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ title, overview, release_date }) => {
  return (
    <div className='list-item'>
      <h1>{title}</h1>
    </div>
  );
};
