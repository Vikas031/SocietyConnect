import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name:'auth',
  initialState: {
    isAuth:false,
  },
  reducers: {
    setAuth: (state,val) => {
      state.isAuth=val;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer