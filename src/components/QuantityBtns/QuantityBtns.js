import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../app/shopping-cart/cart-slice';

const QuantityBtns = ({quantity,id}) => {
    const dispatch=useDispatch();
    const increment=()=>{
        dispatch(cartActions.incrementItem(id));
    }
    const decrement=()=>{
        dispatch(cartActions.decrementItem(id));
    }

    if(quantity===0){
        dispatch(cartActions.removeItem(id));
    }
    return (
        <div className="cart_btns d-flex align-items-center justify-content-between gap-3 mt-2">
            <span onClick={quantity > 0 && decrement}>
                <i class="ri-subtract-line"></i>
            </span>
            <span>
                {quantity}
            </span>
            <span onClick={increment}>
                <i class="ri-add-line"></i>
            </span>
        </div> 
    );
};

export default QuantityBtns;