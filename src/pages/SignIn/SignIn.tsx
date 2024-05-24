import { jwtDecode } from 'jwt-decode'
import { AuthForm } from '../../components/AuthForm'
import { formInputsAuth } from '../../utils/constants'
import { DecodedToken } from '../../types'
import { loginApi } from '../../utils/api/api'
import { loginProps } from '../../utils/api/types'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import { useState } from 'react'

export default function SignIn() {
  const formDataStore = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string>('')

  const login = () => {
    loginApi(formDataStore.email, formDataStore.password)
      .then((res: loginProps) => {
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('refreshToken', res.refreshToken)
        const decodedToken = jwtDecode<DecodedToken>(res.accessToken).userId
        localStorage.setItem('userId', decodedToken)
        navigate('/')
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.statusCode === 401) {
          setServerError('Неверная почта или пароль')
        } else if (err.code === 'ERR_NETWORK') {
          setServerError('Ошибка соединения. Обновите страницу и попробуйте еще раз')
        } else {
          setServerError('Произошла ошибка. Обновите страницу и попробуйте еще раз')
        }
      })
  }

  return <AuthForm handler={login} formData={formInputsAuth} serverError={serverError} />
}
