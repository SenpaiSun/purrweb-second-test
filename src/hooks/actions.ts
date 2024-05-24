import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { setEmail, setPassword, setConfirmPassword, setName, setSurname, setPhone, clearState, setUserInfo, setIsAuth } from '../store/auth/auth.slice'

const actions = {
  setEmail,
  setPassword,
  setConfirmPassword,
  setName,
  setSurname,
  setPhone,
  clearState,
  setUserInfo,
  setIsAuth
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
