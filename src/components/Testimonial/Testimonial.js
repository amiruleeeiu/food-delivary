import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import networkingimg from '../../assets/images/network.png';
import './Testimonial.css'
import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'
import ava4 from '../../assets/images/ava-4.jpg'

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const reviewData=[
        {
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eligendi. At, consequatur ducimus! Rerum, dolor! Error harum, id iste aliquam odit voluptas eos. Laboriosam accusamus architecto ipsa animi illum magnam!',
            imgURL:ava1,
            name:'Robert Brown'
        },
        {
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eligendi. At, consequatur ducimus! Rerum, dolor! Error harum, id iste aliquam odit voluptas eos. Laboriosam accusamus architecto ipsa animi illum magnam!',
            imgURL:ava2,
            name:'Shakia'
        },
        {
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eligendi. At, consequatur ducimus! Rerum, dolor! Error harum, id iste aliquam odit voluptas eos. Laboriosam accusamus architecto ipsa animi illum magnam!',
            imgURL:ava3,
            name:'Cameron Green'
        },
        {
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eligendi. At, consequatur ducimus! Rerum, dolor! Error harum, id iste aliquam odit voluptas eos. Laboriosam accusamus architecto ipsa animi illum magnam!',
            imgURL:ava4,
            name:'Mr. Adnana'
        },
    ]

    return (
        <section>
            <Row className='mt-5'>
                <Col lg='6' md='6'>
                   <div className="testimonial_content">
                    <h5>Testimonial</h5>
                        <h2 className='mt-3'>What our <span>customers </span> are saying</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae velit error libero quasi.</p>
                   </div>
                   <Slider {...settings}>
                        {
                            reviewData.map((item,index)=>(
                                <div key={index} className='review'>
                                    <p>{item.review}</p>
                                    <div className="comment_container d-flex align-items-center gap-3">
                                        <img src={item.imgURL} alt="" className='w-25'/>
                                        <h6 className='tw-bold'>{item.name}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </Col>
                <Col lg='6' md='6'>
                    <div className="testimonial_image">
                        <img src={networkingimg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Testimonial;