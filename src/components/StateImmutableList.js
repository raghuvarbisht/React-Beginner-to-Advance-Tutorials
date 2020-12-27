import React ,{Component} from 'react';
import ProductList from './ProductList';

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

    deleteHandler = (productIndex)=>{
        console.log('clicked'+productIndex)
        const products = this.state.products.splice();
        products.splice(productIndex, 1)
        this.setState({products: products})

    }
      
    render(){
        return(
            <div>              
                {
                    this.state.products.map((product, index)=> {
                        return <ProductList key={index} name={product.name} city={product.city} click={()=>this.deleteHandler(index)}/>
                    })
                }
            </div>
        )
    }
} 
export default TwoWayBinding;