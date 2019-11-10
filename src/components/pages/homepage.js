import React from 'react';
import Directory from '../directory/directory';
import './homepage.scss';

const homepage = ({ history }) => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default homepage;
