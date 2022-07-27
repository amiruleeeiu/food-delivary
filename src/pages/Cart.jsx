import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Helmet from '../components/Helmet/Helmet';
import {Container,Row,Col} from 'react-bootstrap';
import '../styles/cart.css';
import CommonSection from '../components/CommonSection/CommonSection';
import { cartActions } from '../app/shopping-cart/cart-slice';
import { Link } from 'react-router-dom';
import '../components/QuantityBtns/QuantityBtns'
import QuantityBtns from '../components/QuantityBtns/QuantityBtns';

const Cart = () => {
    const cartItems=useSelector(state=>state.cart.productList);
    
    const subTotal=useSelector(state=>state.cart.totalAmount);
    return (
        <Helmet title='cart'>
        <CommonSection title='Cart'/>
            <section className='cart_container'>
                <Container>
                    <Row>
                        <Col lg='12' md='12'>
                            {
                                cartItems.length===0 ? <h3>There is no cart item</h3> :
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                        <th className='text-center' >Image</th>
                                        <th className='text-center' >Title</th>
                                        <th className='text-center' >Quantity</th>
                                        <th className='text-center' >Price</th>
                                        <th className='text-center' >Total Price</th>
                                        <th className='text-center' >Delete</th>
                                        </tr>
                                    </thead>
                                    {
                                        cartItems.map(item=>(
                                            <tbody key={item.id}>
                                                <Td item={item}/>
                                            </tbody>
                                        ))
                                    }
                                    
                                </table>
                                
                            }
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='6' md='6'>
                        </Col>

                        <Col lg='6' md='6' className='mt-4'>
                            <h4>SubTotal : ${subTotal}</h4>
                            <span>Tax & vat include checkout page</span>
                            <div className='product_btn d-flex gap-3 mt-3'>
                                <Link to='/food'><button>Contenue Shopping</button></Link>
                                <Link to='/checkout'><button>Proceed To Checkout</button></Link>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Td = (props)=>{
    const{image01,title,price,quantity,id,totalPrice}=props.item
    const dispatch=useDispatch();
    const removeProduct=()=>{
        dispatch(cartActions.removeItem(id));
    }
    return(
        <tr>
            <td className='text-center '><img src={image01} alt="" className='cart_image'/></td>
            <td className='text-center title' >
                <Link to={`/food/${id}`}>{title}</Link>
            </td>
            <td className='text-center d-flex justify-content-center'>
                <QuantityBtns id={id} quantity={quantity}/>
            </td>
            <td className='text-center'>${price}</td>
            <td className='text-center'>${totalPrice}</td>
            <td className='text-center delete_btn'><span onClick={removeProduct}><i class="ri-delete-bin-5-line"></i></span></td>
        </tr>
    )
}

export default Cart;
