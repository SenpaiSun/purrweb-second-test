import { AuthForm } from '../../components/AuthForm'
import { formInputsRegister } from '../../utils/constants'

export default function SignUp() {
  return <AuthForm formData={formInputsRegister} />
}
