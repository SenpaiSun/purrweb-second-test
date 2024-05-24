import { buttonProps } from '../../types'
import './style.css'

export const Button = (props: buttonProps) => {
  const { textButton, type = 'button', disabled = true, fnc } = props
  return (
    <button
      disabled={disabled}
      type={type}
      className='button__main'
      onClick={(e) => {
        fnc && fnc(e)
      }}
    >
      {textButton}
    </button>
  )
}
