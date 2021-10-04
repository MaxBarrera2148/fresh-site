import React from 'react';
import './Button.css';
import { Link } from 'gatsby';

export function Button() {
  return (
    <Link to='/'>
      <button className='btn'>Home</button>
    </Link>
  );
}