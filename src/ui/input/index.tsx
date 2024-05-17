import { inputProps } from '../../types'
import './style.css'
import accessInput from '../../assets/icons/access_input.svg'
import errorInput from '../../assets/icons/error_input.svg'
import eyeClose from '../../assets/icons/eye_close.svg'
import eyeOpen from '../../assets/icons/eye_open.svg'
import { ChangeEvent, useEffect, useState } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'

export const Input = (props: inputProps) => {
  const { label, placeholder, type, register, validationRules, errors, storeItem } = props
  const [stateInput, setStateInput] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { setEmail, setPassword, setConfirmPassword, setFirstName, setLastName, setPhone } = useActions()
  const stateAuth = useAppSelector((state) => state.auth)
  const hasErrors = Object.values(errors).some((error: any) => error.ref.name === label)
  console.log(stateAuth)
  useEffect(() => {
    setStateInput(hasErrors)
  }, [hasErrors])

  const inputBody = () => {
    if (type === 'email' && stateAuth.email !== '') {
      return (
        <>
          <img className='input__image' src={stateInput ? errorInput : accessInput} />
        </>
      )
    } else if (type === 'password') {
      return (
        <>
          <button onClick={() => setShowPassword(!showPassword)} type='button' className={showPassword ? 'input__button input__button-open' : 'input__button'} />
          <img className='input__image' src={stateInput ? errorInput : accessInput} />
        </>
      )
    }
  }

  const detectStoreItem = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    switch (storeItem) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'phone':
        setPhone(value)
        break
    }
  }

  return (
    <div className='input__container'>
      <label className='input__label' htmlFor={label}>
        {label}
      </label>
      <div className='input__container-input'>
        <input className='input_main' type={showPassword ? 'text' : type} value={stateAuth[storeItem]} placeholder={placeholder} id={label} {...register(label, validationRules)} autoComplete={label === 'Пароль' ? 'new-password' : 'off'} onChange={(e) => detectStoreItem(e)} />
        {inputBody()}
      </div>
    </div>
  )
}
