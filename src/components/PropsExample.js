import React from 'react';

const PropsExample = (props) => {
 return (
        <div>
            <h2>Props Example :</h2>
            <div>Hello I am {props.name} and i lives in {props.city}.</div>
        </div>
    )
};

export default PropsExample;
