export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  type: string
}

export interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  inputs: inputProps[]
}
