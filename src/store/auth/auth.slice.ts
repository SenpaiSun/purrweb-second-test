import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../types";

const initialState: Auth = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  phone: '',
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
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
  },
})

export const { setEmail, setPassword, setConfirmPassword, setFirstName, setLastName, setPhone } = authSlice.actions
export default authSlice.reducer