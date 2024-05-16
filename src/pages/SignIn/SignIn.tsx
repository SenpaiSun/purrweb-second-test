import { AuthForm } from '../../components/AuthForm'
import { formInputsAuth } from '../../utils/constants'

export default function SignIn() {
  return <AuthForm formData={formInputsAuth} />
}
