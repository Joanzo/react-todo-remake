var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', ()=> {
        expect(TodoApp).toExist();
    });
    
    it('should add todo to the todos state on handleAddTodo', function() {
        var todoText = 'Go to Mall !';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({
            todos: []
        });
        
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        
        // expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');

    });
    
    it('should toggle completed value when handleToggle caled', function() {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(todoApp.state.todos[0].id);

        expect(todoApp.state.todos[0].completed).toBe(true);
        
        // expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
    
    // Test thet when toggle from true to false, completedAt get removed

    it('should toggle completed to false from true value when handleToggle caled', function() {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 23123458
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);

        todoApp.handleToggle(todoApp.state.todos[0].id);

        expect(todoApp.state.todos[0].completed).toBe(false);

        // expect completedAt to be undefined
        expect(todoApp.state.todos[0].completedAt).toNotExist();

    });

    
});