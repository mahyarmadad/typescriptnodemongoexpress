import React, { useContext } from 'react';
import AuthContext from './Auth/AuthContext';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const authContext = useContext(AuthContext);
    const { isAutenticated, loading } = authContext;
    return (
        <Route{...rest} render={props => !isAutenticated && !loading ? (<Redirect to="/" />) : (<Component {...props} />)} />
    );
}

export default PrivateRoute;