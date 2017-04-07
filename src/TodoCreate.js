import React, { Component } from 'react';

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
                <input type="text" name="memo" placeholder="todo...." value={this.state.memo} onChange={this.handleChange}/>                                
                <button onClick={this.handleClick}>create</button>
            </div>

        );            
    }
}


TodoCreate.PropTypes={
    onCreate: React.PropTypes.func
};
TodoCreate.defaultProps={
    onCreate:()=>{ console.error("no setting"); }
}
