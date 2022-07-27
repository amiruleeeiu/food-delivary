import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css'
import service from '../assets/images/service-01.png'
import {Link } from 'react-router-dom'

const CheckOut = () => {

    const[userInfo,setUserInfo]=useState({
        name:'',
        phone:'',
        division:'',
        distict:'',
        upozila:'',
        postCode:'',
        location:''
    })

    const user=useSelector(state=>state.auth.user);

    console.log(user);

    const subTotal=useSelector(state=>state.cart.totalAmount);
    let shipping=0;
    const tax=(subTotal/100)*5;
    if(subTotal>0){
        shipping=70;
    }
    const total=subTotal+shipping+tax;
    

    const handleChange=(e)=>{
        const newUserInfo={...userInfo};
        newUserInfo[e.target.name]=e.target.value;
        setUserInfo(newUserInfo);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <Helmet title='checkout'>
            <CommonSection title='Checkout'/>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <div>
                            <h4 className='text-center'>{user.name} put your informantion</h4>
                        </div>
                        <form className="review_form" onSubmit={handleSubmit}>
                            <input className='p-2' type="text" name='name' onChange={handleChange} placeholder='Enter Name' value={user ? user.name : userInfo.name}/>
                            <input className='p-2' type="text" name='phone' onChange={handleChange} placeholder='Phone Number' value={userInfo.phone}/>
                            <input className='p-2' type="text" name='division' onChange={handleChange} placeholder='Division' value={userInfo.division}/>
                            <input className='p-2' type="text" name='distict' onChange={handleChange} placeholder='Distict' value={userInfo.distict}/>
                            <input className='p-2' type="text" name='upozila' onChange={handleChange} placeholder='Upozila' value={userInfo.upozila}/>
                            <input className='p-2' type="text" name='postCode' onChange={handleChange} placeholder='Post Code' value={userInfo.postCode}/>
                            <input className='p-2' type="text" name='location' onChange={handleChange} placeholder='Current Location' value={userInfo.location}/>
                            
                            {
                                user.isloggedIn ? <button type='submit' className='review_btn text-center'>Submit</button>
                                :
                                <Link to='/login'><button type='submit' className='review_btn text-center'>Submit</button></Link>
                            }
                        </form>
                    </Col>
                    <Col lg='5' md='5'>
                        <div className="checkout">
                            <div className="service">
                                <img src={service} alt="" className='w-50 ml-5'/>
                            </div>
                            <div className="price_section">
                                <h5 className='d-flex justify-content-between'>SubTotal: 
                                <span>${subTotal}</span>
                                </h5>
                                <span className='d-flex justify-content-between'>Vat & Tax: <span>${tax}</span></span>
                                <span className='d-flex justify-content-between'>Shipping Charge: <span>${shipping}</span></span>
                                <h5 className='d-flex justify-content-between mt-3'>Total : <span>${total}</span></h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
};

export default CheckOut;