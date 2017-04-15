import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoInfo extends Component{    
    
    render(){  
        return(
            <li className={this.props.todo.state === 0 ? "list-group-item": "list-group-item disabled"}>
                <span onClick={this.props.onClick}>{this.props.todo.memo}</span>
                <button onClick={this.props.onRemove}>remove</button>
            </li>
        );            
    }
}

TodoInfo.PropTypes={
    onRemove: PropTypes.func
};

TodoInfo.defaultProps={
    onRemove:()=>{ console.error("onRemove not defined"); }
}
