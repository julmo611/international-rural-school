import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(reducer, (applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
