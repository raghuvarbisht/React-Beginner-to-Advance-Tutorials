import React, {Component} from 'react';

class ConditionalRendering extends Component {
    constructor(props){
        super(props);

        this.state = {
            isActiveUser : true
        }
    }
    render(){

        /** Option 1- If else */
        if(this.state.isActiveUser){
            return(<div> <h2>Conditional Rendering</h2> Welcome Raghuvar </div>)
        } else {
            return  (<div> <h2>Conditional Rendering</h2> Welcome Guest </div> )
        }

        /**Option 2- Element Variable */
        /*
            let message;
            if(this.state.isActiveUser) {
                message = <div> <h2>Conditional Rendering</h2> Welcome Raghuvar </div>;
            } else {
                message = <div> <h2>Conditional Rendering</h2> Welcome Guest </div>;
            }
            return message;
        */

        /* Option 3- Shortcircut opertor  */
        /*
            return  ( this.state.isActiveUser && 
                        <div> <h2>Conditional Rendering</h2> Welcome Raghuvar </div>
                    )
        */

        /* Option 4- Ternary operator */
        /*
            return  this.state.isActiveUser ? 
                    (<div> <h2>Conditional Rendering</h2> Welcome Raghuvar </div> ) :
                    (<div> <h2>Conditional Rendering</h2> Welcome Guest </div> )
        */

        
      

    }
}

export default ConditionalRendering;