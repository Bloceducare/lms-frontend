import {  createSlice } from "@reduxjs/toolkit";

 
const initialUser:any= {};

export const Auth = createSlice({
  name: "user",
  initialState: {
    user:initialUser, 
  },
  reducers: {  
    loginUser: (state, {payload}) => {     
       state.user =payload   
    },
    logoutUser: (state, ) => {    

           state.user ={}    
   
   },
   },
});


// Action creators are generated for each case reducer function
export const {
 loginUser,
 logoutUser
} = Auth.actions;

export default Auth.reducer;