import React from 'react'
import { Input } from '../../ui/input'
import { formProps } from '../../types'
import './style.css'
import { Button } from '../../ui/button'

export const AuthForm = ({ formData }: { formData: formProps }) => {
  return (
    <div className='auth__container'>
      <form className='auth__form'>
        <div className='auth__data'>
          <h2 className='auth__title'>{formData.title}</h2>
          <div className='auth__inputs'>
            {formData.inputs.map((input, index) => (
              <Input key={index} label={input.label} placeholder={input.placeholder} type={input.type} />
            ))}
          </div>
          <Button textButton='Продолжить' type='submit'/>
          <div>
            <p className='auth__redirect'>{formData.redirect.textRedirect} <a href='#'>{formData.redirect.linkRedirect}</a></p>
          </div>
        </div>
      </form>
    </div>
  )
}
