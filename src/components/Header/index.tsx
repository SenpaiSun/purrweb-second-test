import React from 'react';
import { Logo } from '../../ui/logo';
import './style.css'
import { Logout } from '../../ui/Logout';
import { useAppSelector } from '../../hooks/redux';

export const Header: React.FC = () => {
  const userData = useAppSelector(state => state.auth)
  return (
    <header className='header'>
      <Logo />
      {userData.isAuth && <Logout fullName={userData.name + ' ' + userData.surname} />}
    </header>
  );
};
