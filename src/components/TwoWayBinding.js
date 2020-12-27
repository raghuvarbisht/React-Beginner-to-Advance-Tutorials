import React ,{Component} from 'react';
import Product from './Product';

class TwoWayBinding extends Component {
    constructor(){
        super();
        this.state = {
           products :[
               {id:1, name:'Amit', city: 'Delhi'},
               {id:2, name:'Sumit', city: 'New Delhi'},
               {id:3, name:'Rajat', city: 'Agra'}
            ]
        }
    }

    nameChangeHandler = (event)=>{
        console.log('calling me again')
        this.setState({
            products :[
                {id:1, name:event.target.value, city: 'Delhi'},
                {id:2, name:'Sumit', city: 'New Delhi'},
                {id:3, name:'Rajat', city: 'Agra'}
             ]
        })
    }
      
    render(){
        return(
            <div>
                
                    {
                        this.state.products.map((product,index)=> {
                            return <Product key={index}
                            name={product.name} 
                            city={product.city}
                            changed={this.nameChangeHandler}/>
                        })
                    }                
                
            </div>
        )
    }
} 
export default TwoWayBinding;