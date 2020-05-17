import React, { Fragment } from 'react';
import Home from './pages/Home';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Task from './pages/Task';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "font-awesome/css/font-awesome.css";
import AuthState from './context/Auth/AuthState';
import AlertState from './context/Alert/AlertState';
import Alerts from './context/componets/Alerts';
import PrivateRoute from './context/PrivateRoute';

function App() {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/task" component={Task} />
              <Redirect to="/" />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>


  );
}

export default App;
