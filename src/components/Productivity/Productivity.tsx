import React from 'react';
import { Button } from '../../ui/button';

export const Productivity: React.FC = () => {

  return (
    <div>
      <h3>Ваша продуктивность выросла!</h3>
      <p>За прошлую неделю вы выполнили 12 задач</p>
      <Button type='button' textButton='Подробнее' disabled={false}/>
    </div>
  );
};
