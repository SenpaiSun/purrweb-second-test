import { AuthForm } from '../../components/AuthForm'
import { formInputsAbout } from '../../utils/constants'

export default function SignIn() {
  return <AuthForm formData={formInputsAbout} />
}
