import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoCreate extends Component{    
    constructor(props){
        super(props)

        this.state={
            memo:'', 
            state:0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        let nextState={};
        nextState[e.target.name] = e.target.value;
        
        this.setState(nextState)
    }

    handleClick(){
        const todo={
            memo:this.state.memo, 
            state:this.state.state
        };
        
        this.props.onCreate(todo);
        
        this.setState({
            memo:'', 
            state:0
        });
    }

    handleKeyPress(e){
        if (e.charCode === 13) {
            this.handleClick();
        }
    }

    render(){        
        return(
            <div>
                <input 
                    type="text" 
                    name="memo" 
                    placeholder="내용을 입력하세요..."
                    className="form-control" 
                    value={this.state.memo} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress}                       
                />
            </div>
        );            
    }
}


TodoCreate.PropTypes={
    onCreate: PropTypes.func
};

TodoCreate.defaultProps={
    onCreate:()=>{ console.error("onCreate not defined"); }
}
