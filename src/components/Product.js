import React from 'react';

const Product = (props) => {
 return (
        <div>
            <h2>Props Example :</h2>
            <div>Hello I am {props.name} and i lives in {props.city}.</div>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Product;
