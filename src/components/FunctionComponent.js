import React from 'react';

const FuncationComponent = () => {
        return (<div>
                    <h2>Functional Component Example :</h2>                    
                      Hello Raghuvar. This is functional component
                </div>
            )
}
export default FuncationComponent;

// function component - example
/*Option-1 
Default export - export default allow to use any name in import statement  
// import  FuncationComponent from './components/FuncationComponent'; - correct
// import  FuncationComponent from './components/FuncationComponent'; - correct
*/
/* Option 2- 
Named Export - export without default allow to use only same name in import statement inside {} 

import  {FuncationComponent} from './components/FuncationComponent'; -correct
import  FuncationComponent from './components/FuncationComponent'; - will give error
import  {FuncationComponent} from './components/FuncationComponent'; - will give error
*/ 
//export let FuncationComponent = () => <h2>Hello Raghuvar</h2>
