import React, { Component } from 'react';

export default class TodoInfo extends Component{    
    
    render(){        
        return(
            <div>
                <input type="checkbox" />
                <span onClick={this.props.onClick}>{this.props.todo.memo}</span>
            </div>
        );            
    }
}
