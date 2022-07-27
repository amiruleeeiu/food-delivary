import React from 'react';
import { ListGroup,Container,Row,Col ,ListGroupItem} from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import {Link, NavLink} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="fotter_logo">
                            <img src={logo} alt='testy treat' className='w-25 mb-3'/>
                            <h6>Testy Treat</h6>
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                        <ListGroup>
                            <h6>Delivary Time</h6>
                                <p>Sunday-Thusday</p>
                                <span>10:00am-11:00pm</span>
                                <p className='mt-3'>Friday-Saturday</p>
                                <span>Off Day</span>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='3'>
                        <h6>Contact</h6>
                        <span>Location: Bangla Bazar , Dhaka 1201, Bangladesh</span>
                        <p>Phone: 01746162231</p>
                        <p>Email: amiruleeeiu15@gmail.com</p>
                    </Col>
                    <Col lg='3' md='3'>
                        <div className="Newsletter">
                            <h6>Newsletter</h6>
                            <span>Subscribe Our Channel</span>
                            <div className='subscribe d-flex align-items-center gap-2 mt-3'>
                                <input type="text" />
                                <button>
                                    Send
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg='12' md='12' className='d-flex justify-content-between'>
                        <span>@Copyright-2022, Website made by Amirul Islam , All Rights Reserved.</span>
                        <div className="social_media d-flex align-items-center gap-2">
                            <Link to='/'><i class="ri-facebook-line"></i></Link>
                            <Link to='/'><i class="ri-instagram-line"></i></Link>
                            <Link to='/'><i class="ri-youtube-line"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;