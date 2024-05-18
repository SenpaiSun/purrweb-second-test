import React from 'react'
import { TitleAccount } from '../../components/TitleAccount'
import { Productivity } from '../../components/Productivity'
import { AccordionSection } from '../../components/AccordionSection'
import './style.css'
import { UserInfo } from '../../components/UserInfo'

const dataUser = { firstName: 'Анастасия', lastName: 'Филатовна', phone: '+7 908 555 35 35', email: 'nastie203@mail.ru' }

export const MyProfile: React.FC = () => {
  const dataUserSort: { [key: string]: string }[] = [{ Имя: dataUser.firstName }, { Фамилия: dataUser.lastName }, { Телефон: dataUser.phone }, { 'Электронная почта': dataUser.email }]
  return (
    <div className='my-profile'>
      <TitleAccount />
      <UserInfo dataUserSort={dataUserSort} />
      <Productivity count={12} />
      <AccordionSection />
    </div>
  )
}
