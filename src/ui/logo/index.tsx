import React from 'react';
import logo from '../../assets/icons/logo.svg'
import './style.css';

export const Logo: React.FC = () => {
  return (
    <div className="logo__container">
       <img className="logo__image" src={logo} alt="Логотип" />
       <h1 className='logo__title'>Purrweb</h1>
    </div>
  );
};
