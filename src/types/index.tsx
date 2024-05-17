import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  type: string
  register: UseFormRegister<any>;
  validationRules: RegisterOptions;
  errors: any
}

export interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  inputs: inputProps[]
  redirect: {
    textRedirect: string
    linkRedirect: string
  }
}

export interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
}