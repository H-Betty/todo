import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoInfo extends Component{    
    
    render(){ 
        const isComplete = (data) => {
            return data === 0;
        }
             
        return(
            <a href="#" className="list-group-item clearfix">
                <span className="glyphicon glyphicon-file"></span>
                <span onClick={this.props.onChangeState}>{this.props.todo.memo}</span>
                <span className="pull-right">
                    <button 
                        className={isComplete(this.props.todo.state) ? "btn btn-xs btn-info": "btn btn-xs btn-default"}
                        onClick={this.props.onChangeState}>END</button>
                    <button 
                        className={isComplete(this.props.todo.state) ? "btn btn-xs btn-default": "btn btn-xs btn-warning"}
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
