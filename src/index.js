import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/bootstrap.min.css';

import Results from './components/results/index';
import AppBar from './components/appBar/index';
import Details from './components/details/index';

const root = (
    <Provider store={store}>
        <Router>
            <AppBar />

            <Switch>
                <Route path='/results' component={ Results } />
                <Route path='/details/:id' component={Details} /> 
            	<Redirect from='/' to="results" />
            </Switch>
            
        </Router>
    </Provider>
)

ReactDOM.render(root, document.getElementById('root'));