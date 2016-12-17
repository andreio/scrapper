import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import { syncHistoryWithStore } from 'react-router-redux';
import { makeStore } from './store';
import { hashHistory } from 'react-router';

const store = makeStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>, document.getElementById('root')
);
