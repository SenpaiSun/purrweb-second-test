import { ChangeEvent, useEffect, useState } from 'react'
import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import { inputProps } from '../../types'
import './style.css'
import accessInput from '../../assets/icons/access_input.svg'
import errorInput from '../../assets/icons/error_input.svg'
import { Auth } from '../../store/types'

export const Input = (props: inputProps) => {
  const { label, placeholder, type, register, validationRules, errors, storeItem, serverError } = props
  const [stateInput, setStateInput] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { setEmail, setPassword, setConfirmPassword, setName, setSurname, setPhone } = useActions()
  const stateAuth = useAppSelector((state) => state.auth)
  const hasErrors = Object.values(errors).some((error: any) => error.ref.name === label)

  useEffect(() => {
    setStateInput(hasErrors)
  }, [hasErrors])

  const inputBody = () => {
    if (serverError) {
      return (
        <>
          <img className='input__image' src={errorInput} />
          {(label === 'Пароль' || label === 'Повтор пароля') && <button onClick={() => setShowPassword(!showPassword)} type='button' className={showPassword ? 'input__button input__button-open' : 'input__button'} />}
        </>
      )
    }
    if (type === 'email' && stateAuth.email !== '') {
      return <img className='input__image' src={stateInput ? errorInput : accessInput} />
    } else if (label === 'Пароль' || label === 'Повтор пароля') {
      return (
        <>
          {(label === 'Пароль' ? stateAuth.password !== '' : stateAuth.confirmPassword !== '') && <button onClick={() => setShowPassword(!showPassword)} type='button' className={showPassword ? 'input__button input__button-open' : 'input__button'} />}
          {(label === 'Пароль' && stateAuth.password !== '') || (label === 'Повтор пароля' && stateAuth.confirmPassword !== '') ? <img className='input__image' src={stateInput ? errorInput : accessInput} /> : null}
        </>
      )
    }
  }

  const detectStoreItem = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (type === 'tel') {
      value = value.replace(/[^\d+-]/g, '')
    }
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
      case 'name':
        setName(value)
        break
      case 'surname':
        setSurname(value)
        break
      case 'phone':
        setPhone(value)
        break
    }
  }

  const getInputValue = (storeItem: keyof Auth | undefined) => {
    if (storeItem && stateAuth[storeItem] !== undefined) {
      return stateAuth[storeItem].toString()
    }
    return ''
  }

  return (
    <div className='input__container'>
      <label className='input__label' htmlFor={label}>
        {label}
      </label>
      <div className='input__container-input'>
        <input className='input_main' type={showPassword ? 'text' : type} value={getInputValue(storeItem)} placeholder={placeholder} id={label} {...(register && register(label, validationRules))} autoComplete={label === 'Пароль' ? 'new-password' : 'off'} onChange={detectStoreItem} />
        {inputBody()}
      </div>
    </div>
  )
}
