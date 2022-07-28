import React from 'react';
import './Carts.css'
import {useSelector, useDispatch} from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CartItem from './CartItem';
import './Carts.css'
import { cartActions } from '../../app/shopping-cart/cart-slice';
import { cartUIActions } from '../../app/shopping-cart/cart-ui-slice';
import StyleLine from '../StyleLine/StyleLine';
import { Link } from 'react-router-dom';

const Carts = () => {

    const cartUIVisible=useSelector(state=>state.cartVisible.cartUIVisible);
    const cartItems=useSelector(state=>state.cart.productList);
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    
    const dispatch=useDispatch()
    
    return (
        <div className={`${cartUIVisible ? 'carts_container' : 'carts_container closeCarts'}`}>

            <ListGroup>
                
                <div className="carts">
                    <div className="colse_icon m-2">
                        <span onClick={()=>dispatch(cartUIActions.toggle())}>
                            <i class="ri-close-fill"></i>
                        </span>
                    </div>
                    <div className="cart_header mb-3">
                        <h3 className='text-center'>Cart Items</h3>
                        <StyleLine width='150px'/>
                    </div>
                    <div className="cart__item_list">
                        {
                            cartItems.length > 0 ?( cartItems.map(item=>(
                                <CartItem item={item} key={item.id}/>
                            )) )
                            : <h5 className='text-center'>There is no cart Items.. </h5>
                        }
                    </div>
                   
                    <div className="checkout_section d-flex justify-content-between align-items-center">
                        <div className='d-flex gap-2'>
                            <h4>Subtotal: </h4>
                            <h4> ${totalAmount}</h4>
                        </div>
                        <Link to='/checkout'><button>CheckOut</button></Link>
                    </div>
                </div>
                

            </ListGroup>
        </div>
    );
};

export default Carts;