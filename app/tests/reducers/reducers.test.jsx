var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            
            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.searchTextReducer(df(''), df(action));
            
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };
            
            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.showCompletedReducer(df(false), df(action));
            
            expect(res).toEqual(true);
        });
    });
    
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Going to mall'
            };

            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        
        it('should toggle todo', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: 2
            };
            
            var exampleTodos = [
                {
                    id: 1,
                    text: 'Going to mall',
                    completed: false,
                    completedAt: undefined
                }, {
                    id: 2,
                    text: 'Working',
                    completed: true,
                    completedAt: 1232028534
                }, {
                    id: 3,
                    text: 'Drinking',
                    completed: false,
                    completedAt: undefined
                }
            ];

            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.todosReducer(df(exampleTodos), df(action));
            //console.log(res);
            expect(res[1].completed).toEqual(false);
            expect(res[1].completedAt).toEqual(undefined);
            //expect(res[0].text).toEqual(action.text);
        });
    });
});