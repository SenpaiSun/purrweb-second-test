import { Input } from '../../ui/input'
import { formProps } from '../../types'
import './style.css'
import { Button } from '../../ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
export const AuthForm = ({ formData, handler }: { formData: formProps, handler?: SubmitHandler<FieldValues> }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const formDataStore = useAppSelector((state) => state.auth)
  const { clearState } = useActions()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const redirect = () => {
    if (formData?.redirect?.linkRedirect === 'Зарегистрироваться') {
      navigate('/sign-up')
    } else {
      navigate('/sign-in')
    }
    clearState()
  }

  const hasErrors = Object.keys(errors).length > 0
  const firstErrorMessage = Object.values(errors)[0]?.message
  const checkButtonState = () => {
    switch (location.pathname) {
      case '/sign-up':
        if (!hasErrors && formDataStore.email !== '' && formDataStore.password !== '' && formDataStore.confirmPassword !== '') {
          return false
        }
        break
      case '/sign-in':
        if (!hasErrors && formDataStore.email !== '' && formDataStore.password !== '') {
          return false
        }
        break
      case '/about-me':
        if (!hasErrors && formDataStore.name !== '' && formDataStore.surname !== '' && formDataStore.phone !== '') {
          return false
        }
        break
      default:
        return true
    }
    return true
  }

  return (
    <div className='auth__container'>
      <form className='auth__form' onSubmit={handleSubmit(handler ? handler : () => {})}>
        <div className='auth__data'>
          <h2 className='auth__title'>{formData.title}</h2>
          <div>
            <div className='auth__inputs'>
              {formData.inputs.map((input, index) => (
                <Input
                  key={index}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                  register={register}
                  errors={errors}
                  storeItem={input.storeItem}
                  validationRules={input.label === 'Повтор пароля' ? { ...input.validationRules, validate: (value) => (value === watch('Пароль') ? true : 'Пароли не совпадают') } : input.validationRules}
                />
              ))}
            </div>
            <div className='auth__error'>{hasErrors && <p className='auth__error-text'>{firstErrorMessage as string}</p>}</div>
          </div>
          <Button fnc={location.pathname === '/sign-up' ? () => navigate('/about-me') : undefined} textButton='Продолжить' type='submit' disabled={checkButtonState()} />
          {location.pathname === '/about-me' ? (
            <div className='auth__plug'></div>
          ) : (
            <div className='auth__redirect-container'>
              <p className='auth__redirect-text'>{formData?.redirect?.textRedirect}</p>
              <button type='button' className='auth__redirect-link' onClick={redirect}>
                {formData?.redirect?.linkRedirect}
              </button>
            </div>
          )}
        </div>
      </form>
      {location.pathname === '/about-me' && (
        <button onClick={() => navigate(-1)} className='auth__back-button'>
          Назад
        </button>
      )}
    </div>
  )
}
