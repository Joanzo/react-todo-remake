var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', ()=> {
        expect(TodoAPI).toExist();
    });


    describe('setTodos', () => {

        it('should set valid todos array', ()=> {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', ()=> {
            var todos = {a: 'b'};
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });


    describe('getTodos', () => {

        it('should return empty array for bad localstorage data', ()=> {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in localstorage', ()=> {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', function() {
        var todos = [{
            id: 1,
            text: 'test all files',
            completed: true
        },{
            id: 2,
            text: 'two some',
            completed: false
        },{
            id: 3,
            text: 'three Some',
            completed: true
        }];

        it('should return all items if showCompleted is true', function() {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return uncomplete items only if showCompleted is false', function() {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });
        
        it('should sort by completed status', function() {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', function() {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });
        
        it('should return all todos if searchText is empty', function() {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

    });

});