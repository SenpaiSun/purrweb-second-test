import React from 'react';
import { Logo } from '../../ui/logo';
import './style.css'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Logo />
    </header>
  );
};
