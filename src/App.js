import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const Dashboard = React.lazy(() => import('./containers/Dashboard'));
//const DefaultLayout = React.lazy(() => import('./views/Pages/Login'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/" name="Home" render={props => <Dashboard {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
