
import {createSlice} from '@reduxjs/toolkit'

const cartUISlice=createSlice({
    name:'cartUI',
    initialState:{
        cartUIVisible:false
    },
    reducers:{
        toggle(state){
            state.cartUIVisible=!state.cartUIVisible;
        }
    }
})

export const cartUIActions=cartUISlice.actions;
export default cartUISlice;