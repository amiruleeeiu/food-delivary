import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        productList:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addItem(state,action){
            const newItem=action.payload;
            const existingItem=state.productList.find(item=>item.id===newItem.id);
            const{id,title,image01,price,quantity}=newItem;

            state.totalQuantity+=quantity

            if(!existingItem){
                state.productList.push({
                    id,
                    title,
                    image01,
                    price,
                    quantity,
                    totalPrice:price*quantity
                });
                state.totalAmount+=price*quantity;
            }
            else{
                state.totalAmount+=existingItem.totalPrice;
                existingItem.quantity+=quantity;
            }
        },

        removeItem(state,action){
            const newItemId=action.payload;
            const existingItem=state.productList.find(item=>item.id===newItemId);
            state.productList=state.productList.filter(item=>item.id!==newItemId);
            state.totalAmount-=existingItem.totalPrice;
            state.totalQuantity-=existingItem.quantity
        },

        incrementItem(state,action){
            const newId=action.payload;
            const existingItem=state.productList.find(item=>item.id===newId);
            existingItem.totalPrice+=existingItem.price
            state.totalAmount+=existingItem.price
            state.totalQuantity+=1
            existingItem.quantity++;
        },
        decrementItem(state,action){
            const newId=action.payload;
            const existingItem=state.productList.find(item=>item.id===newId);
            existingItem.totalPrice-=existingItem.price
            state.totalAmount-=existingItem.price
            state.totalQuantity-=1
            existingItem.quantity--;
        }
    }

})

export const cartActions=cartSlice.actions;
export default cartSlice;