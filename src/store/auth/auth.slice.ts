import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Auth } from '../types'

const initialState: Auth = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  surname: '',
  phone: '',
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setUserInfo: (state, action: PayloadAction<{ email: string; name: string; surname: string; phone: string }>) => {
      state.email = action.payload.email
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.phone = action.payload.phone
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    clearState: () => initialState,
  },
})

export const { setEmail, setPassword, setConfirmPassword, setName, setSurname, setPhone, clearState, setUserInfo, setIsAuth } = authSlice.actions
export default authSlice.reducer
