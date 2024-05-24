import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../../components/AuthForm'
import { useAppSelector } from '../../hooks/redux'
import { registerApi } from '../../utils/api/api'
import { registerProps } from '../../utils/api/types'
import { formInputsAbout } from '../../utils/constants'

export default function SignIn() {
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
      .catch((err) => console.log(err))
  }

  return <AuthForm handler={register} formData={formInputsAbout} />
}
