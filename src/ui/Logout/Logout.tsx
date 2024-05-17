import React from 'react';
import './style.css'

export const Logout = ({ fullName }: { fullName: string}) => {
  return (
    <div className='logout'>
      <p className='logout__text'>{fullName}</p>
      <button className='logout__button'>Выход</button>
    </div>
  );
};
