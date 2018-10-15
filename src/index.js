import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
<Router>    
    <Switch>        
        <Route path={'/login'} component={App}/>
        <Route path={'/home'} component={Home}/>
        <Route path={'/'} component={App}/>
    </Switch>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
