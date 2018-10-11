import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
<Router>    
    <Switch>
        <Route path={'/'} component={App}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/home'} component={Home}/>
    </Switch>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
