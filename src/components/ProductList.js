import React from 'react';

const ProductList = (props) => {
    const style={
        backgroundColor: 'white',
        border: '1px solid red'
    }
 return (
        <div style={style}>
            <h2>Props Example :</h2>
            <div>Hello I am {props.name} and i lives in {props.city}.</div>
        </div>
    )
};

export default ProductList;
