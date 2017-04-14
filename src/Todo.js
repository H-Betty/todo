import React, { Component } from 'react';
import TodoInfo from './TodoInfo';
import TodoCreate from './TodoCreate';

export default class Todo extends Component{    

    constructor(props){
        super(props);
        this.state ={
            value:0, 
            search: '',
            selectKey:-1,
            todo:[
                {memo:"ttt", state:0},
                {memo:"sss", state:1},
                {memo:"eee", state:0},
                {memo:"3333", state:0}
            ]                
        };

        this.handleClickPlus = this.handleClickPlus.bind(this);        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.handleChecked= this.handleChecked.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    /**
     * 값 +1
     */
    handleClickPlus(){
        this.setState({
            value : this.state.value +1
        })
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
         this.setState({
            selectKey :key            
        })             
    }

    handleChecked(key){
        this.setState({
            selectKey :key            
        })        
    }

    /**
     * todo 추가 
     * @param {*todo} temp 
     */
    handleCreate(temp){         
        //console.log(temp.memo);
        //console.log(temp.state);

        this.setState({                        
            todo: this.state.todo.concat(temp)
        })
        
    }

    
    /**
     * select key로 삭제시 사용함
     */    
    handleRemove(){
        console.log("remove");

        /*
        this.setState({
            todo:this.todo.spliace(this.state.selectKey, 1)
        })*/
    }

    render(){

        const mapToComponent = (data) =>{
            console.log(data);

            data.sort();
            data = data.filter(
                (todo) =>{
                    return todo.memo.indexOf(this.state.search) > -1
                }
            )
            return data.map((todo, i) =>{
                return (
                    <TodoInfo todo={todo} key={i} onClick={() => this.handleClick(i)}/>
                );
            })
        }

        return (
            <div>      
                <h1>{this.state.value}</h1>                
                <p>
                    <input name="search" placeholder="입력...." value={this.state.search} onChange={this.handleChange} />
                    <button onClick={this.handleClickPlus}>{this.props.msg}</button>
                </p>          
                <div>{mapToComponent(this.state.todo)}</div>

                <TodoCreate 
                    onCreate={this.handleCreate}                   
                /> 
            </div>
        );
    }
}
