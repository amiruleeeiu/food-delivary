import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CommonSection from '../components/CommonSection/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css'
import service from '../assets/images/service-01.png'
import {Link } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';

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

    const[isInfo,setIsInfo]=useState(false);
    console.log(isInfo);

    const{name,phone,division,distict,upozila,postCode,location}=userInfo;

    const {user} =useUserAuth();

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
        setIsInfo(true);
    }

    return (
        <Helmet title='checkout'>
            <CommonSection title='Checkout'/>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <div>
                            <h4 className='text-center'> Put your informantion</h4>
                        </div>
                        <form className="review_form needs-validation" onSubmit={handleSubmit}>
                            <input className='p-2' type="text" name='name' onChange={handleChange} placeholder='Enter Name' value={userInfo.name} required/>
                            <input className='p-2' type="text" name='email' onChange={handleChange} placeholder='Enter Email' value={user && user.email}/>
                            <input className='p-2' type="text" name='phone' onChange={handleChange} placeholder='Phone Number' value={userInfo.phone} required/>
                            <input className='p-2' type="text" name='division' onChange={handleChange} placeholder='Division' value={userInfo.division} required/>
                            <input className='p-2' type="text" name='distict' onChange={handleChange} placeholder='Distict' value={userInfo.distict} required/>
                            <input className='p-2' type="text" name='upozila' onChange={handleChange} placeholder='Upozila' value={userInfo.upozila} required/>
                            <input className='p-2' type="text" name='postCode' onChange={handleChange} placeholder='Post Code' value={userInfo.postCode} required/>
                            <input className='p-2' type="text" name='location' onChange={handleChange} placeholder='Current Location' value={userInfo.location} required/>
                            
                            {
                                user ? <button type='submit' className='review_btn text-center'>Submit</button>
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
                            {
                                isInfo && 
                                <div className="checkout_info mt-3">
                                    <h6>{name}</h6>
                                    <span><i class="ri-mail-line"></i> {user.email}</span>
                                    <br />
                                    <span><i class="ri-phone-line"></i> {phone}</span>
                                    <br />
                                    <span><span className='fw-bold'>Address</span>: {division}, {distict}, {upozila}, {location}, {postCode}</span>
                                </div>
                            }
                                
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
};

export default CheckOut;