import React ,{Component} from 'react';

class StateExample extends Component {
    constructor(){super();
        this.state = {
           message : 'Raghuvar'
        }
    }
    changeMessage(){
       let userMessage = this.state.message === 'Raghuvar' ? 'Jay' : 'Raghuvar';
       this.setState({
           message: userMessage
       })
    }
  
    render(){
        return(
            <div>
                <h2>State Example :</h2>
                <div> 
                    How are you <span>{this.state.message}</span>?
                    Click button to change message
                    <button onClick={()=>this.changeMessage()}>Click </button>
                </div>
            </div>
        )
    }
} 
export default StateExample;