import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/fake-data/products';
import Helmet from '../components/Helmet/Helmet';
import { Container ,Row,Col } from 'react-bootstrap';
import '../styles/food-details.css';
import CommonSection from '../components/CommonSection/CommonSection';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../app/shopping-cart/cart-slice';
import StyleLine from '../components/StyleLine/StyleLine';
import ProductCard from '../components/ProductCard/ProductCard'
import QuantityBtns from '../components/QuantityBtns/QuantityBtns';

const FoodDetails = () => {
    const {id}=useParams();
    const[image,setImage]=useState();
    const[reviewList,setReviewList]=useState([]);
    const[review,setReview]=useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange=(e)=>{
        const newReview={...review};
        newReview[e.target.name]=e.target.value;
        setReview(newReview);
    }

    const handleReview=(e)=>{
        e.preventDefault()
        setReviewList([...reviewList,review]);
        setReview({
            name:'',
            email:'',
            message:''
        })
    }

    const dispatch=useDispatch();
    const cartItems=useSelector(state=>state.cart.productList);


    const cartItem=cartItems.find(item=>item.id===id);

    const currentItem=products.find(item=>item.id===id);
    const{title,image01,image02,image03,desc,price,category}=currentItem;

    const handleImage=(img)=>{
        setImage(img)
    }

    let quantity=1;

    if(cartItems.length>0){
        quantity=cartItem ? cartItem.quantity : 1;
    }

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
        dispatch(cartActions.incrementItem(id));
    }
    const decrement=()=>{
        dispatch(cartActions.decrementItem(id));
    }

    const sameCategoryItems=products.filter(item=>item.category===category).slice(0,6);

     
    return (
        <Helmet title='food details'>
            <CommonSection title='Food Details'/>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="image_section text-center">
                            <img src={image ? image : image01} alt="" />
                            <div className='image_btns mt-3'>
                                <span onClick={()=>handleImage(image01)}>
                                    <img src={image01} alt="" />
                                </span>
                                <span onClick={()=>handleImage(image02)}>
                                    <img src={image02} alt="" />
                                </span>
                                <span onClick={()=>handleImage(image03)}>
                                    <img src={image03} alt="" />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="food_content mt-5">
                            <h3 className='mb-4'>{title}</h3>
                            <span>{desc}</span>
                        </div>
                        <div className='d-flex align-items-center mt-3 gap-5'>
                            <div>
                                <div className="product_btn" onClick={addToCart}>
                                    {
                                        cartItem ? 
                                        <button disabled style={{background:'gray',color:'black'}}>Add To Cart</button> 
                                        :
                                        <button>Add To Cart</button>
                                    }
                                </div>    
                            </div> 
                            <QuantityBtns id={id} quantity={quantity}/>
                            <div>
                                <h4>Price : ${price}</h4>
                            </div>
                        </div>
                        <div className="review mt-5">
                            <h5 className='text-center'>Review</h5>
                            <StyleLine width='200px'/>
                            {
                                reviewList.length>0 && 
                                reviewList.map((item,index)=>(
                                    <div className="review_content" key={index}>
                                        <span>{item.name}</span>
                                        <p className='d-flex align-items-center gap-1 mt-1'>
                                            <i class="ri-mail-line"></i>  
                                            {item.email}
                                        </p>
                                        <p>{item.message}</p>
                                    </div> 
                                ))
                            }
                            <div >
                                <form className="review_form" onSubmit={handleReview}>
                                    <input className='p-2' type="text" name='name' onChange={handleChange} placeholder='Enter Name' value={review.name}/><br />
                                    <input className='p-2' type="email" name='email' onChange={handleChange} placeholder='Enter Email' value={review.email}/>
                                    <textarea className='p-2' name="message" rows="5" onChange={handleChange} placeholder='Enter review' value={review.message}/>
                                    <button type='submit' className='review_btn text-center'>Submit</button>
                                </form>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h2>You might be like</h2>
                    {
                        sameCategoryItems.map(item=>(
                            <Col lg='3' md='3' key={item.key}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Helmet>
    );
};

export default FoodDetails;