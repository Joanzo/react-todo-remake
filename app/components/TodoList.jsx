import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';


export class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            return filteredTodos.map( (todo) => {
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
};

export default connect(
    (state) => {
        return state;
    }
)(TodoList);
