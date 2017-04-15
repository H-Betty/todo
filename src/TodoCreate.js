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

    render(){        
        return(
            <div>
                <div className="form-inline">
                    <div className="form-group mx-sm-3">
                        <input 
                            type="text" 
                            name="memo" 
                            placeholder="todo...."
                            className="form-control" 
                            value={this.state.memo} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary" 
                        onClick={this.handleClick}>추가</button>
                </div>
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
