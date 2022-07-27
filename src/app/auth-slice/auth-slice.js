import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
            user:{
                isLoggedIn:false,
                name:'',
                photoURL:'',
                email:'',
            }
    },
    reducers:{
        signIn(state,action){
            const user=action.payload;
            const {name,email,photoURL}=user;
            state.user={
                isLoggedIn:true,
                name,
                photoURL,
                email,
        }
            
        }
    }
    
})

export const authActions=authSlice.actions;
export default authSlice;