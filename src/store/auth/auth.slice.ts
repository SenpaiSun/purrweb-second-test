import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../types";

const initialState: Auth = {
  email: '',
  password: '',
  confirmPassword: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload
    },
  },
})

export const { setEmail, setPassword, setConfirmPassword } = authSlice.actions
export default authSlice.reducer