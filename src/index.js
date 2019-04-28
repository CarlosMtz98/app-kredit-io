import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header'
import Solicitud from './containers/Solictud/index';
import Resultado from './containers/Resultado/Resultado'
import NotFound from './containers/NotFound/index';

const routing = (

    <Router>
        <div className="">             
            <Header/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/solicitud" component={Solicitud}/>
                <Route path="/resultado" component={Resultado}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.querySelector('#root'))