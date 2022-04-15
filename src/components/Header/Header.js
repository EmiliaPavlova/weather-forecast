import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <div className='header'>
      <div className='header_title'>{title}</div>
    </div>
  )
};