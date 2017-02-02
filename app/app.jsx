var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');

var TodoApp = require('TodoApp');
//var Login = require('Login');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

/*store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});*/

/*var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));*/

store.dispatch(actions.startAddTodos());

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
        <Router history={hashHistory}>
          <Route path="/" component={Login}>
            <Route path="todo" component={TodoApp}/>
            <IndexRoute component={Login}/>
          </Route>
        </Router>
    </Provider>,
  document.getElementById('app')
);
