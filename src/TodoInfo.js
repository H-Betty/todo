import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoInfo extends Component{    
    
    render(){  
        return(
            <a href="#" className="list-group-item clearfix">
                <span className="glyphicon glyphicon-file"></span>{this.props.todo.memo}
                <span className="pull-right">
                    <button 
                        className={this.props.todo.state === 0 ? "btn btn-xs btn-info": "btn btn-xs btn-default"}
                        onClick={this.props.onChangeState}>END</button>
                    <button 
                        className={this.props.todo.state === 0 ? "btn btn-xs btn-default": "btn btn-xs btn-warning"}
                        onClick={this.props.onRemove}>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>           
                </span>
            </a>
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
