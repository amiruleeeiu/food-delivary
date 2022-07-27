import React from 'react';
import './CommonSection.css'
import {Container} from 'react-bootstrap'

const CommonSection = (props) => {
    return (
        
        <div className='common_section'>
            <Container>
                <h1>{props.title}</h1>
            </Container>
        </div>
        
    );
};

export default CommonSection;