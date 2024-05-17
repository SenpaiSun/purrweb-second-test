import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { setEmail, setPassword, setConfirmPassword } from '../store/auth/auth.slice';


const actions = {
  setEmail,
  setPassword,
  setConfirmPassword
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};