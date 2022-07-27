import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import './ProductCard.css'
import { cartActions } from '../../app/shopping-cart/cart-slice';
import QuantityBtns from '../QuantityBtns/QuantityBtns';

const ProductCard = (props) => {
    const[quantity,setQuantity]=useState(1);
    const{image01,id,title,price}=props.item;

    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price,
            quantity
        }))
    }

    const increment=()=>{
        setQuantity(quantity+1)
        dispatch(cartActions.incrementItem(id));
        
    }
    const decrement=()=>{
        setQuantity(quantity-1)
        dispatch(cartActions.decrementItem(id))
    }

    return (
        <div className="product_card text-center mt-4">
            <div className="product_image mb-3">
                <img src={image01} alt="" className='w-50'/>
            </div>
            <div className="product_content">
                <Link to={`/food/${id}`}><h6>{title}</h6></Link>
                <h5>${price}</h5>
                <div className='d-flex algin-items-center justify-content-between mt-3'>
                    <div className="product_quantity d-flex">
                        <button onClick={decrement}>
                            <i class="ri-subtract-line"></i>
                        </button>
                        <input type="text" value={quantity} />
                        <button onClick={increment}>
                        <i class="ri-add-line"></i>
                        </button>
                    </div>
                    <div className="product_btn" onClick={addToCart}>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;