import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends  Component {
    constructor(){
        super();
        this.state = {
            message: ''
        };
        this.parentHandler = this.parentHandler.bind(this);
    }

    parentHandler(childData){
        this.setState({
            message: `Called method from ${childData}`
        })
        
    }

    render(){
        return(
            <div>
              <h2>Call Parent method from child component</h2>
              {this.state.message}
              <ChildComponent callParent={this.parentHandler} />
            </div>
        )
    }
}

export default ParentComponent;