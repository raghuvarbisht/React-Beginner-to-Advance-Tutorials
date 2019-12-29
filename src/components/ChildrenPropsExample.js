import React from 'react';


const ChildrenPropsExample = (props) => {

     return (
         <div>
            <h2>Children Props example : </h2>
            <div> 
                Hi i am {props.name} 
                {props.children}
            </div>
         </div>
     )
};
export default ChildrenPropsExample;
