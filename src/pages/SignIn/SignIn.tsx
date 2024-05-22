import { jwtDecode } from 'jwt-decode'
import { AuthForm } from '../../components/AuthForm'
import { formInputsAuth } from '../../utils/constants'
import { DecodedToken } from '../../types'
import {  loginApi } from '../../utils/api/api'
import { loginProps } from '../../utils/api/types'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

export default function SignIn() {
  const formDataStore = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  const login = () => {
    loginApi(formDataStore.email, formDataStore.password)
    .then((res: loginProps) => {
      localStorage.setItem('accessToken', res.accessToken)
      localStorage.setItem('refreshToken', res.refreshToken)
      const decodedToken = jwtDecode<DecodedToken>(res.accessToken).userId
      localStorage.setItem('userId', decodedToken)
      navigate('/')
    })
  }

  return <AuthForm handler={login} formData={formInputsAuth} />
}
