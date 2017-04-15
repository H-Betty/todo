import React, { Component } from 'react';
//import PropTypes from 'prop-types' 

export default class UI extends Component{
    
    render(){
        return (
            <div class="container">
            <div className="list-group">
                <a href="#" className="list-group-item clearfix">
                    <span className="glyphicon glyphicon-file"></span>
                        rrrrrrrLorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <span className="pull-right">
                        <button className="btn btn-xs btn-info">CCS</button>
                        <button className="btn btn-xs btn-warning">
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>           
                    </span>
                </a>
                <a href="#" className="list-group-item clearfix">
                    <span className="glyphicon glyphicon-file"></span>
                        내용
                    <span className="pull-right">
                        <button className="btn btn-xs btn-info">end</button>
                        <button className="btn btn-xs btn-warning">
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>           
                    </span>
                </a>
            </div>            
            </div>
        );
    }
}

