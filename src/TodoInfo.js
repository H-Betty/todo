import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoInfo extends Component{    
    
    render(){  
        return(
            <li className={this.props.todo.state === 0 ? "list-group-item": "list-group-item disabled"}>
                <span onClick={this.props.onClick}>{this.props.todo.memo}</span>
                <button 
                    type="button" 
                    className="btn-sm btn btn-outline-success"
                    onClick={this.props.onChangeState}>Check</button>
                <button 
                    type="button" 
                    className="btn-sm btn btn-danger"
                    onClick={this.props.onRemove}>DEL</button>
            </li>
        );            
    }
}

TodoInfo.PropTypes={
    onRemove: PropTypes.func, 
    onChangeState: PropTypes.func
};

TodoInfo.defaultProps={
    onRemove:()=>{ console.error("onRemove not defined"); },
    onChangeState:()=>{ console.error("onChangeState not defined"); }
}
