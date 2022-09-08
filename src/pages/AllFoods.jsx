import React, { useEffect, useState } from 'react';
import { Container ,Row,Col } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import ProductCard from '../components/ProductCard/ProductCard';
import '../styles/all-foods.css'
import products from '../assets/fake-data/products'
import Form from 'react-bootstrap/Form';
import CommonSection from '../components/CommonSection/CommonSection';
import ReactPaginate from 'react-paginate';
import '../styles/paginations.css';

const AllFoods = () => {

    const[allProducts,setAllProducts]=useState(products);
    const[searchKey,setSearchKey]=useState('');
    const[selectValue,setSelectValue]=useState('');
    const[selectCategory,SetSelectCategory]=useState('All');
    const[pageNumber,setPageNumber]=useState(0);
    const[pageCount,setPageCount]=useState(0)

    useEffect(()=>{
        let items=products.filter(item=>item.title.toLowerCase().includes(searchKey.toLowerCase()));
        if(selectValue==='assending'){
            items.sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        else if(selectValue==='dissending'){
            items.sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();
            
                if (fa > fb) {
                    return -1;
                }
                if (fa < fb) {
                    return 1;
                }
                return 0;
            });
        }
    
        else if(selectValue==='high'){
            items.sort((a,b)=>b.price-a.price);
        }
        else if(selectValue==='low'){
            items.sort((a,b)=>a.price-b.price);
        }

        if(selectCategory!=='All'){
            items=items.filter(item=>item.category===selectCategory);
        }

        const productPerPage=12;
        const visitedPage=pageNumber*productPerPage;
        const displayPage=items.slice(visitedPage,visitedPage+productPerPage);
        setAllProducts(displayPage);
        const pageCount=Math.ceil(items.length/productPerPage);
        setPageCount(pageCount);

    },[searchKey,selectValue,selectCategory,pageNumber])

    const pageChange=({selected})=>{
        setPageNumber(selected);
    }

    return (
        <Helmet title='All-Foods'>
            <CommonSection title='All Foods'/>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className="search_item d-flex justify-content-between mt-2">
                            <input type="text" placeholder='I am looking for...' onChange={(e)=>setSearchKey(e.target.value)} className='w-100'/>
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <div className="sorting_item text-end mt-2">
                            <Form.Select onChange={(e)=>SetSelectCategory(e.target.value)}>
                                <option value='All'>All Category</option>
                                <option value='Pizza'>Pizza</option>
                                <option value='Burger'>Burger</option>
                                <option value='Bread'>Bread</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <div className="sorting_item text-end mt-2">
                            <Form.Select onChange={(e)=>setSelectValue(e.target.value)}>
                                <option>Default</option>
                                <option value='assending'>Alphabetically A-Z</option>
                                <option value='dissending'>Alphabetically Z-A</option>
                                <option value='high'>High Price</option>
                                <option value='low'>Low Price</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        allProducts.length > 0 && allProducts.map(item=>(
                            <Col lg='3' md='4'>
                                <ProductCard item={item} key={item.id}/>
                            </Col>
                        ))
                    }
                </Row>
                <Row className='mt-5'>
                    <ReactPaginate
                        onPageChange={pageChange}
                        pageCount={pageCount}
                        previousLabel='Prev'
                        nextLabel='Next'
                        containerClassName='paginationBtns'
                    />
                </Row>
            </Container>
        </Helmet>
    );
};

export default AllFoods;