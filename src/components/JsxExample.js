import React from 'react';
/*
React.CreateEmelent can take any number of child element,

*/ 
const JsxExample = ()=> {
     
    return React.createElement(
            'div', 
            {id: 'container', className : 'red'},     
            React.createElement('h1', null ,'hello JSX example')
        )
}

export default JsxExample;

/*out of the above JSX code in brodser
<div id="container" class="red">
  <h2>
    hello JSX example
  </h2>
</div>
*/