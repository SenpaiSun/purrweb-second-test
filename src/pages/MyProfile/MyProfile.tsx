import React, { useEffect } from 'react'
import { TitleAccount } from '../../components/TitleAccount'
import { Productivity } from '../../components/Productivity'
import { AccordionSection } from '../../components/AccordionSection'
import './style.css'
import { UserInfo } from '../../components/UserInfo'
import { getUserApi } from '../../utils/api/api'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { useNavigate } from 'react-router-dom'

export const MyProfile: React.FC = () => {
  const userId = localStorage.getItem('userId')
  const {setUserInfo, setIsAuth} = useActions()
  const dataUser = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  console.log(dataUser)

  useEffect(() => {
    if(userId) {
      getUserApi(userId)
      .then((res) => {
        setUserInfo({
          email: res.email,
          name: res.name,
          surname: res.surname,
          phone: res.phone
        })
        setIsAuth(true)
      })
      .catch((err) => {
        console.log(err.response.data.statusCode)
        if(err.response.data.statusCode === 404) {
          setIsAuth(false)
          navigate('/sign-in')
          localStorage.clear()
        }
      })
    }
  }, [])


  const dataUserSort: { [key: string]: string }[] = [{ Имя: dataUser.name }, { Фамилия: dataUser.surname }, { Телефон: dataUser.phone }, { 'Электронная почта': dataUser.email }]
  return (
    <div className='my-profile'>
      <TitleAccount />
      <UserInfo dataUserSort={dataUserSort} />
      <Productivity count={12} />
      <AccordionSection />
    </div>
  )
}
