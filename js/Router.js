import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import UrlSetupView from './url-setup/UrlSetupView';

export default ({ history })=>
    (
        <Router history={history}>
            <Route path='/' component={UrlSetupView}/>
        </Router>
    );
