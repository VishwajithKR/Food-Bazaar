import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
    token :localStorage.getItem("token1") || "",
    role :localStorage.getItem("role") || "",
  },
  reducers: {
    setLogin: (state, action) => {
      const { token, ...userData } = action.payload;
      state.userData = userData;
      state.token = token;     
      state.role = userData.role
      localStorage.setItem("role", userData.role); 
      localStorage.setItem("token1", token);
    },
    setLogout: state => {
     state.token = null
     localStorage.removeItem("token1")
     localStorage.removeItem("role")
     
    },
  }
})

export const { setLogin, setLogout } = userSlice.actions
export default userSlice.reducer
