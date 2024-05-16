import React from 'react'
import { Input } from '../../ui/input'
import { formProps } from '../../types'
import './style.css'
import { Button } from '../../ui/button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const AuthForm = ({ formData }: { formData: formProps }) => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const redirect = () => {
    if (formData.redirect.linkRedirect === 'Зарегистрироваться') {
      navigate('/sign-up')
    } else {
      navigate('/sign-in')
    }
  }

  const hasErrors = Object.keys(errors).length > 0
  const firstErrorMessage = Object.values(errors)[0]?.message
  console.log(errors)

  return (
    <div className='auth__container'>
      <form className='auth__form' onSubmit={handleSubmit(redirect)}>
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
                  validationRules={input.label === 'Повтор пароля' ? { ...input.validationRules, validate: (value) => (value === watch('Пароль') ? true : 'Пароли не совпадают') } : input.validationRules}
                />
              ))}
            </div>
            <div className='auth__error'>{hasErrors && <p className='auth__error-text'>{firstErrorMessage as string}</p>}</div>
          </div>
          <Button textButton='Продолжить' type='submit' disabled={hasErrors} />
          <div className='auth__redirect-container'>
            <p className='auth__redirect-text'>{formData.redirect.textRedirect}</p>
            <button type='button' className='auth__redirect-link' onClick={redirect}>
              {formData.redirect.linkRedirect}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
