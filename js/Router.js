import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import MainApp from './app/MainPage';
import FlowPage from './app/flow/FlowPage';

export default ({ history })=>
    (
        <Router history={history}>
            <Route path='/' component={MainApp}>
                <IndexRoute component={FlowPage}/>
            </Route>
        </Router>
    );
