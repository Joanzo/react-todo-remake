var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoItem.value;
        if (todoText.length > 0) {
            this.refs.todoItem.value = '';
            dispatch(actions.addTodo(todoText));
        } else {;
            this.refs.todoItem.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo">
                    <input type="text" ref="todoItem" placeholder="What do you want todo? "/>
                    <button className="button expanded" type="submit">Submit</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);
