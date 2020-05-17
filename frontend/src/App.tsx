import React from 'react';
import Home from './pages/Home';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Task from './pages/Task';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "font-awesome/css/font-awesome.css";
import AuthState from './context/Auth/AuthState';

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/task" component={Task} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AuthState>

  );
}

export default App;
