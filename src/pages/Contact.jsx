import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet';
import '../styles/contact.css'

const Contact = () => {

    const handleChange=()=>{

    }

    return (
        <Helmet title="Contact">
            <section className='contact' style={{marginTop:'100px'}}>
                <Container>
                    <Row>
                        <Col lg='12' md='12' ms='12' >
                            <h5 className='mb-3 ml-5'>For Contact , Fill up the form</h5>
                        </Col>
                        <Col lg='6' md='6' ms='6'>
                            <form>
                                <div className="contact_form">
                                    <input type="text" name='name'onChange={handleChange} placeholder='Name . . . ' required/>
                                </div>
                                <div className="contact_form">
                                    <input type="email" name='email' onChange={handleChange} placeholder='Email . . .' required/>
                                </div>
                                <textarea name="message" className='w-100' rows="5" placeholder='Write . . .'></textarea>
                                <div className="contact_button">
                                    <button >Submit</button>
                                </div>
                            </form>
                        </Col>
                        <Col lg='6' md='6' ms='6'>
                            <h5>Address: Mirpur 11, Dhaka</h5>
                            <span>Email: amiruleeeiu15@gmail.com</span><br />
                            <span>Phone:+8801746162231</span><br />
                            <span>Follow Us.</span><br />
                            <div className='social_media d-flex align-items-center gap-2 mt-2'>
                                <Link to='#'><span><i class="ri-facebook-line"></i></span></Link>
                                <Link to='#'><span><i class="ri-twitter-line"></i></span></Link>
                                <Link to='#'><span><i class="ri-instagram-line"></i></span></Link>
                                <Link to='#'><span><i class="ri-linkedin-line"></i></span></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </Helmet>
    );
};

export default Contact;