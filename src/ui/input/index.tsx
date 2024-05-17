import { inputProps } from '../../types'
import './style.css'
import accessInput from '../../assets/icons/access_input.svg'
import errorInput from '../../assets/icons/error_input.svg'
import eyeClose from '../../assets/icons/eye_close.svg'
import eyeOpen from '../../assets/icons/eye_open.svg'
import { useEffect, useState } from 'react'

export const Input = (props: inputProps) => {
  const { label, placeholder, type, register, validationRules, errors } = props
  const [stateInput, setStateInput] = useState(false)
  const hasErrors = Object.values(errors).some((error: any) => error.ref.name === label)

  useEffect(() => {
    setStateInput(hasErrors)
  }, [hasErrors])

  const inputBody = () => {
    if (type === 'email') {
      return (
        <>
          <img className='input__image' src={stateInput ? errorInput : accessInput} />
        </>
      )
    } else {
      return (
        <>
          <button type='button' className='input__button' />
          <img className='input__image' src={stateInput ? errorInput : accessInput} />
        </>
      )
    }
  }

  return (
    <div className='input__container'>
      <label className='input__label' htmlFor={label}>
        {label}
      </label>
      <div className='input__container-input'>
        <input className='input_main' type={type} placeholder={placeholder} id={label} {...register(label, validationRules)} />
        {inputBody()}
      </div>
    </div>
  )
}
