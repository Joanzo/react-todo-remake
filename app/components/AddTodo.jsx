import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoItem.value;
        if (todoText.length > 0) {
            this.refs.todoItem.value = '';
            dispatch(actions.startAddTodo(todoText));
        } else {;
            this.refs.todoItem.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo">
                    <input type="text" ref="todoItem" placeholder="What do you want todo? "/>
                    <button className="button expanded" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default connect()(AddTodo);
