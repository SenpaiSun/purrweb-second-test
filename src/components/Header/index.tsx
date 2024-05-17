import React from 'react';
import { Logo } from '../../ui/logo';
import './style.css'
import { Logout } from '../../ui/Logout/Logout';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Logo />
      <Logout fullName='Анастасия Филатовна' />
    </header>
  );
};
