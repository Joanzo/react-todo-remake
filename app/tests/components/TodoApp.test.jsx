import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';

import * as configureStore from 'configureStore';

import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';


describe('TodoApp', () => {
    it('should exist', ()=> {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
              <TodoApp />
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList);

        expect(todoList.length).toEqual(1);
    });
});
