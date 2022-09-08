import React, { useEffect, useState } from 'react';
import { Container ,Row,Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from '../assets/images/hero.png';
import Category from '../components/UI/Category/Category';
import '../styles/hero-style.css';
import '../styles/home.css'
import feature1 from '../assets/images/service-01.png'
import feature2 from '../assets/images/service-02.png'
import feature3 from '../assets/images/service-03.png'
import burger from '../assets/images/hamburger.png';
import pizza from '../assets/images/pizza.png';
import bread from '../assets/images/bread.png';
import products from '../assets/fake-data/products.js';
import ProductCard from '../components/ProductCard/ProductCard';
import whyimg from '../assets/images/location.png';
import Testimonial from '../components/Testimonial/Testimonial';
import StyleLine from '../components/StyleLine/StyleLine';
import Helmet from '../components/Helmet/Helmet';

const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: feature1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  
    {
      title: "Super Dine In",
      imgUrl: feature2,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: feature3,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  ];

const Home = () => {

    const[allProducts,setAllProducts]=useState(products);
    const[hotPizza,setHotPizza]=useState([]);
    const[category,setCategory]=useState('All');

    
    useEffect(()=>{
        const filteredPizza=products.filter(item=>item.category==='Pizza').slice(0,4);
        setHotPizza(filteredPizza);
    },[hotPizza])

    useEffect(()=>{

        let items=products;
        if(category!=='All'){
            items=items.filter(item=>item.category===category);
        }
        setAllProducts(items);

    },[category]);

    return (
        <Helmet title='Home'>
            <Container className='mt-5'>
                <section>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <h5>Easy way to make an order</h5>
                                <h1 className='hero_title mt-4'>
                                    <span>HUNGRY? </span>Just wait <br />food at <span>Your door.</span>
                                </h1>
                                <p className='mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className="hero_btns d-flex align-items-center gap-3 mt-5">
                                <button className='order_btn'>Order Now</button>
                                <button className='all_foods_btn'>
                                    <Link to='/food'>See All Foods</Link>
                                </button>
                            </div>
                            <div className="hero_service mt-4 d-flex align-items-center gap-5">
                                <p className=' d-flex align-items-center gap-2'>
                                    <span className='shopping_icon'>
                                    <i class="ri-shopping-bag-line"></i>
                                    </span>
                                    No Shipping Charge
                                </p>
                                <p className='shopping_icon d-flex align-items-center gap-2'>
                                    <span className='shopping_icon'>
                                        <i class="ri-window-line"></i>
                                    </span>
                                    
                                    100% secure Service
                                </p>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_image">
                                <img src={hero} alt="hero-img" className='w-100'/>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Category/>
                </section>
                <section>
                    <Row>
                        <Col lg='12' className='text-center mt-5'>
                            <h5 className='feature_subtitle'>What we serve</h5>
                            <h2 className='feature_title'>Just sit back at home</h2>
                            <h2 className='feature_title'>
                                We will 
                                <span> take Care</span>
                            </h2>
                            <p className="feature__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam, eius.{" "}
                            </p>
                        </Col>
                        {
                            featureData.map((item,index)=>(
                                <Col lg='4' md='4' key={index} className='feature_content text-center mt-5'>
                                    <div className="feature_img">
                                        <img src={item.imgUrl} alt={item.title}  className='w-25 mb-3'/>
                                    </div>
                                    <h5 className='fw-bold'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col lg='12' md='12' className='mt-5 text-center'>
                            <h2>Popular Foods</h2>
                            <StyleLine width='200px'/>                    
                        </Col>
                    </Row>
                    <Row className='category_btns text-center mt-5'>
                        <Col lg='3' md='3'>
                            <button className={` ${category==='All' ? 'active_category_btn' : ''}`} onClick={()=>setCategory('All')}>All Foods</button>
                        </Col>
                        <Col>
                            <button className={`${category==='Pizza' ? 'active_category_btn' : ''}`} onClick={()=>setCategory('Pizza')}>
                                <img src={pizza} alt="" className="w-25" />
                                Pizza
                            </button>
                        </Col>
                        <Col>
                            <button className={`${category==='Burger' ? 'active_category_btn' : ''}`} onClick={()=>setCategory('Burger')}>
                                <img src={burger} alt="" className="w-25"/>
                                Burger
                            </button>
                        </Col>
                        <Col>
                            <button className={`${category==='Bread' ? 'active_category_btn' : ''}`} onClick={()=>setCategory('Bread')}>
                                <img src={bread} alt="" className="w-25"/>
                                Bread
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        {
                            allProducts.slice(0,12).map(item=>(
                                <Col lg='3' md='4'sm='6'>
                                    <ProductCard item={item} key={item.id}/>
                                </Col>
                            ))
                        }
                        <div className="see_more align-items-center">
                            <Link className='text-end mt-3' to='/food'>See More <i class="ri-arrow-right-line"></i></Link>
                        </div>
                    </Row>
            
                </section>
                <section className='mt-5'>
                    <Row>
                        <Col lg='6' md='6'>
                            <img src={whyimg} alt="" className='w-100'/>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="why_testy_treat">
                                <div className="tasty_treat_title">
                                    <h3>Why <span>Tasty Treat?</span></h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt maiores beatae nam ipsum minus consequuntur impedit deserunt doloremque, et nisi minima facere cum unde, nemo necessitatibus amet aperiam omnis.</p>
                            </div>
                            <ListGroup>
                                <ListGroupItem>
                                    <p className='d-flex align-items-center fw-bold gap-2'>
                                        <i class="ri-checkbox-circle-line"></i>
                                        Fress and Tasy Food
                                    </p>
                                    
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p className='d-flex align-items-center fw-bold gap-2'>
                                        <i class="ri-checkbox-circle-line"></i>
                                        Quality Support
                                    </p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p className='d-flex align-items-center fw-bold gap-2'>
                                        <i class="ri-checkbox-circle-line"></i>
                                        Order from any location
                                    </p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col lg='12' md='12' className='text-center  mb-5'>
                            <h2>Hot Pizza</h2>
                            <StyleLine  width='130px'/>
                        </Col>
                        {
                            hotPizza.map(item=>(
                                <Col lg='3' md='3'>
                                    <ProductCard item={item} key={item.id}/>
                                </Col>
                            ))
                        }
                    </Row>
                </section>
                <Testimonial/>
            </Container>
        </Helmet>
    );
};

export default Home;