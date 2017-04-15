import React, { Component } from 'react';
import TodoInfo from './TodoInfo';
import TodoCreate from './TodoCreate';
import './Todo.css';
import update from 'react-addons-update'

export default class Todo extends Component{    

    constructor(props){
        super(props);

        this.state ={
            search: '',
            selectKey:-1,
            todo:[
                {memo:"ttt", state:0},
                {memo:"sss", state:1},
                {memo:"eee", state:0},
                {memo:"3333", state:0}
            ]                
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.handleChangeState= this.handleChangeState.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    /**
     * 선택 select key 변경
     * @param {*target} e 
     */
    handleChange(e){
        this.setState({
            search: e.target.value
        })
    }

    /**
     * 선택 key
     * @param {*select} key 
     */
    handleClick(key){
        alert(key);
    }

    handleChangeState(key){

        this.setState({
            todo: update(
                this.state.todo, 
            {
                [key]:{
                    state: {$set: 1}
                }
            })
        })        
    }

    /**
     * todo 추가 
     * @param {*todo} temp 
     */
    handleCreate(temp){         
        this.setState({                        
            todo: this.state.todo.concat(temp)
        })
    }

    
    /**
     * todo 삭제 
     */    
    handleRemove(key){
        if(this.state.todo[key].state === 1){

            this.setState({
                todo:update(
                    this.state.todo, 
                    {
                        $splice:[[key, 1]] 
                    }
                )
            });
        }
        else{
            alert("안했다.");
        }
    }

    render(){

        const mapToComponent = (data) =>{
           
            data.sort();
            data = data.filter(
                (todo) =>{
                    return todo.memo.indexOf(this.state.search) > -1 
                }
            )

            return data.map((todo, i) =>{
                return (
                    <TodoInfo 
                        todo={todo} 
                        key={i}  
                        onClick={() => this.handleClick(i)}
                        onRemove={() => this.handleRemove(i)}
                        onChangeState={() => this.handleChangeState(i)}
                    />
                );
            })
        }

        return (
            <div className="container">                
                <p>
                    <input 
                        name="search" 
                        placeholder="search...." 
                        value={this.state.search} 
                        onChange={this.handleChange} />
                </p>          

                <div className="todo-list">
                    <ul className="list-group">{mapToComponent(this.state.todo)}</ul>
                </div>
              
                <TodoCreate 
                    onCreate={this.handleCreate}                   
                />               

            </div>
        );
    }
}
