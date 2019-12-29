import React, {Component} from 'react';

class BindingEventExample extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
        /*used for step 3*/
        // this.clickHandler = this.clickHandler.bind(this);
        
    }
    /**
     * Step 1,2 and 3- use this way
     */
    clickHandler() {    
        this.setState({
          message: 'Clicked on me'
        });
    }
    
    /**
     * Step 4- use arrow function 
     */
    /*
    clickHandler = ()=> {
        this.setState({
            message: setting using arrow function'
        })
    }
    */
    render() {
        return (
            <div>
                <h2>Event Binding Example :</h2>
                {this.state.message}
                
                {
                    /**Step 1 */
                   /*<button onClick={this.clickHandler.bind(this)}>Click Me</button>*/
                }
                {
                    /**Step 2*/
                   <button onClick={()=>this.clickHandler()}>Click Me</button>
                }
                {
                    /**Step 3 */
                  /* <button onClick={this.clickHandler}>Click Me</button>*/
                }
                {
                    /**Step 4 */
                /*<button onClick={this.clickHandler}>Click Me</button>*/
                }
            </div>
        )
    }
}
export default BindingEventExample;