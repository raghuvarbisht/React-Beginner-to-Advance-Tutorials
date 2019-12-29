import React from 'react';


const ChildComponent = (props) => {
 return(
    <div>
        <h3>
            <button onClick={()=>props.callParent('parent')}> Click me </button> 
            to call parent component method</h3>
        
    </div>
    
 )
};

export default ChildComponent;