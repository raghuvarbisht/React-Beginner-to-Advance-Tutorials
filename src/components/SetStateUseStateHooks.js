import React , {useState} from 'react';

/**
 * 
 * useState hooks donot preserve state for other parameters 
 * first parameter - object - productState , 
 * second parameter - function - setProductState
 */
const SetStateUseStateHooks =(props)=>{
     let [productState , setProductState ]= useState({
        products : [
            { id: 1, name: 'shoe', price: 150 , size: 1 },
            { id: 2, name: 'bike', price: 250 , size: 5 },
            { id: 3, name: 'bread', price: 250 , size: 9 }
        ]        
    })

    let [otherState]= useState({
        name: 'This is my state'
    })


    const switchHandler = ()=>{
        setProductState({
            products : [
                { id: 1, name: 'shoe1', price: 125 , size: 1 },
                { id: 2, name: 'bike2', price: 126 , size: 5 },
                { id: 3, name: 'bread3', price: 127 , size: 9 }
            ]
        })
    }
    return ( 
            <div className="home">
                <div>
                    <h1>Using useState hooks</h1>
                    <button onClick={switchHandler}>clickMe</button>
                    
                    <span>{otherState.name}</span>
                    {
                        productState.products.map(product => { 
                        return  <div key={product.id}> 
                                    <div>Id: {product.id} </div>
                                    <div>Name:  {product.name} </div>
                                    <div>Price: {product.price} </div>
                                    <div>Size:{product.size} </div>
                                </div>
                            })
                    } 
                </div>
            </div>
        )
}

export default SetStateUseStateHooks