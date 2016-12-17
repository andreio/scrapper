import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';

const rMiddleware = routerMiddleware(hashHistory);

export const makeStore = (initialState = {})=>
    createStore(
        combineReducers({
            routing: routerReducer
        }),
        initialState,
        compose(applyMiddleware(thunk, rMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f=>f)
    );
