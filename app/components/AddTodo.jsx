var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var strTodoItem = this.refs.todoItem.value;
        if (strTodoItem !== '') {
            this.refs.todoItem.value = '';
            this.props.onAddTodo(strTodoItem);
        } else {;
            this.refs.todoItem.focus();
        }
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="add-todo">
                    <input type="text" ref="todoItem" placeholder="What do you want todo? "/>
                    <button className="button expanded" type="submit">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;