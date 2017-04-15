import React, { Component } from 'react';

export default class Plus extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            value:0 
        }

        this.handleClick = this.handleClick.bind(this);        
    }
    
    handleClick(){
        this.setState({
            value : this.state.value +1
        })
    }    
    
    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>            
        );
    }
}