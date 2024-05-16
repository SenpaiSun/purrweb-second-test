import { inputProps } from '../../types';
import './style.css';

export const Input = (props: inputProps) => {
  const { label, placeholder, type, register, validationRules} = props
  return (
    <div className="input__container">
      <label className="input__label" htmlFor={label}>{label}</label>
      <input className="input_main" type={type} placeholder={placeholder} id={label} {...register(label, validationRules)}/>
    </div>
  );
};
