var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            return todos.map( (todo) => {
                return (
                    // When you generating a multiple instances, you must provide unique key props for React to generate
                    //{...todo} is the same as spreading each children into its own property: id={todo.id} text={todo.text}
                    <Todo key={todo.id} {...todo} />
                )
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);