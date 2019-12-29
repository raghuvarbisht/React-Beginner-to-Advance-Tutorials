import React ,{Component} from 'react';

class SetStateExample extends Component {
    constructor(){
        super();
        this.state = {
           count : 0
        }
    }
    incrementCounter(counter){
       this.setState((preState)=>({
        count : preState.count + counter
       }))
    }

    decrementCouter(counter){
        this.setState((preState)=>({
            count : preState.count - counter
           }))
    }
    incrementCounterFive(){
        this.incrementCounter(5);
        
    }

    decrementCouterFive(){
        this.decrementCouter(5);
    }

  
    render(){
        return(
            <div>
                <h2>Set State Example :</h2>
                <p> 
                  Counter : <span>{this.state.count}</span>
                  <button onClick={()=>this.incrementCounter(1)}>Increment </button> 
                  <button onClick={()=>this.decrementCouter(1)}>Decrement </button>

                  <button onClick={()=>this.incrementCounterFive()}>Increment 5</button> 
                  <button onClick={()=>this.decrementCouterFive()}>Decrement 5 </button>
                </p>
            </div>
        )
    }
} 
export default SetStateExample;