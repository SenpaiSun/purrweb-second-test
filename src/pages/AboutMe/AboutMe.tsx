import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../../components/AuthForm'
import { useAppSelector } from '../../hooks/redux'
import { registerApi } from '../../utils/api/api'
import { registerProps } from '../../utils/api/types'
import { formInputsAbout } from '../../utils/constants'
import { useState } from 'react'

export default function SignIn() {
  const [serverError, setServerError] = useState<string>('')
  const formDataStore = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  const register = () => {
      registerApi(formDataStore.email, formDataStore.password, formDataStore.name, formDataStore.surname, formDataStore.phone)
      .then((res: registerProps) => {
        if (res.id) {
          localStorage.setItem('userId', res.id)
          navigate('/')
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.statusCode === 409) {
          setServerError('Пользователь с такой почтой уже существует!')
        } else if (err.code === 'ERR_NETWORK') {
          setServerError('Ошибка соединения. Обновите страницу и попробуйте еще раз')
        } else {
          setServerError('Произошла ошибка. Обновите страницу и попробуйте еще раз')
        }
      })
  }

  return <AuthForm handler={register} formData={formInputsAbout} serverError={serverError}/>
}
