import { buttonProps } from '../../types';
import './style.css'

export const Button = (props: buttonProps) => {
  const { textButton, type, disabled=true } = props
  return (
    <button disabled={disabled} type={type} className='button__main' onClick={(e) => e.preventDefault()}>{textButton}</button>
  );
};
