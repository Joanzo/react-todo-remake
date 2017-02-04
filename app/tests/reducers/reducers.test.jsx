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
                todo: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 9343953
                }
            };

            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
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
            var updates = {
              completed: false,
              completedAt: null
            };
            var action = {
                type: 'UPDATE_TODO',
                id: exampleTodos[1].id,
                updates
            };
            // Deep freeze is a module to ensure that we use pure function in the reducers if not the test will throw error
            var res = reducers.todosReducer(df(exampleTodos), df(action));
            //console.log(res);
            expect(res[1].completed).toEqual(updates.completed);
            expect(res[1].completedAt).toEqual(updates.completedAt);
            expect(res[1].text).toEqual(exampleTodos[1].text);
        });

        it('should add existing todos', () => {
            var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should wipe todos on logout', () => {
            var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: 'LOGOUT',
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(0);

        });
    });
    
    describe('authReducer', () => {
        it('should store uid on LOGIN', () => {
            const action = {
                type: 'LOGIN',
                uid: 'abc'
            };

            var res = reducers.authReducer(undefined, df(action));

            expect(res).toEqual({
                uid: action.uid
            });
        });
        it('should wipe auth on LOGIN', () => {
            const authData = {
                uid: 'a23a'
            }
            const action = {
                type: 'LOGOUT',
            };

            var res = reducers.authReducer(df(authData), df(action));

            expect(res).toEqual({});
        });
    });
});
