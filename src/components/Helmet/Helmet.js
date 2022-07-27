import React from 'react';

const Helmet = (props) => {
        document.title='Food delivary - '+ props.title;
    return (
        <div className='w-100 mt-5'>
            {props.children}
        </div>
    );
};

export default Helmet;