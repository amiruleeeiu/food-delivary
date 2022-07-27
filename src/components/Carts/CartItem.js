import React from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { cartActions } from '../../app/shopping-cart/cart-slice';
import QuantityBtns from '../QuantityBtns/QuantityBtns';

const CartItem = (props) => {

    const {id,title,image01,price,totalPrice,quantity}=props.item

    const dispatch=useDispatch();

    const removeProduct=()=>{
        dispatch(cartActions.removeItem(id));
    }

    return (
        <div className='cart_item d-flex justify-content-between gap-3'>
            <div className='d-flex align-items-center gap-5'>
                <div className="cart_image">
                    <img src={image01} alt=""/>
                </div>
                <div className="cart_content">
                <Link to={`/food/${id}`}><span className='fw-bold'>{title}</span></Link>
                    
                    <div className="cart_quantity_price d-flex align-items-center gap-3 mt-2">
                        <span>{quantity} x ${price}-</span>
                        <span style={{color:'orangered'}}>${totalPrice}</span>
                    </div>
                    <QuantityBtns id={id} quantity={quantity}/>
                </div>
            </div>
            <div className="colse_icon mt-2">
                <span onClick={removeProduct}>
                    <i class="ri-close-fill"></i>
                </span>
            </div>
        </div>
    );
};

export default CartItem;