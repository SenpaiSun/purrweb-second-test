import { RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  storeItem: string
  placeholder: string
  type: string
  register?: UseFormRegister<any>
  validationRules?: RegisterOptions
  errors?: any
}

export interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  inputs: inputProps[]
  redirect?: {
    textRedirect: string
    linkRedirect: string
  }
}

export interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string
  type: 'button' | 'submit' | 'reset'
  disabled: boolean
  fnc?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface UserInfoProps {
  dataUserSort: { [key: string]: string }[]
}

export interface DecodedToken {
  userId: string
  email: string
  iat: number
  exp: number
}
