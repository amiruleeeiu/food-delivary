import React from 'react';
import categoryimg1 from '../../../assets/images/category-01.png'
import categoryimg2 from '../../../assets/images/category-02.png'
import categoryimg3 from '../../../assets/images/category-03.png'
import categoryimg4 from '../../../assets/images/category-04.png'
import { Container ,Row,Col} from 'react-bootstrap';
import './Category.css'

const categoryItems=[
    {
        display:'Fast Food',
        imgURL:categoryimg1
    },
    {
        display:'Pizza',
        imgURL:categoryimg2
    },
    {
        display:'Asian Foods',
        imgURL:categoryimg3
    },
    {
        display:'Row Meat',
        imgURL:categoryimg4
    }
    
]

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryItems.map((item,index)=>(
                        <Col lg='3' md='4'>
                        <div className="category d-flex align-items-center gap-3 mt-3">
                            <div className="category_image ">
                                <img src={item.imgURL} alt="" />
                            </div>
                            <div>
                            <h4>{item.display}</h4>
                            </div>
                        </div>
                        </Col>
                    ))
                }
                </Row>
        </Container>
    );
};

export default Category;