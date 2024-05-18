import React from 'react'
import { EditButton } from '../../ui/editButton'
import './style.css'

export const TitleAccount: React.FC = () => {
  return (
    <div className='my-profile__container-info'>
      <h2 className='my-profile__title'>Мой профиль</h2>
      <EditButton title='Редактировать' />
    </div>
  )
}
