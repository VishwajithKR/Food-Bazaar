import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
    token: "",
    role: "",
  },
  reducers: {
    setLogin: (state, action) => {
      const { token, ...userData } = action.payload;
      state.userData = userData;
      state.token = token;
      state.role = userData.role;
    },
    setLogout: state => {
      state.userData = [];
      state.token = "";
      state.role = "";
    },
  }
})

export const { setLogin, setLogout } = userSlice.actions
export default userSlice.reducer
