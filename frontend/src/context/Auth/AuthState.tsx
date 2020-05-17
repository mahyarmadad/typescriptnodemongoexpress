import React, { useContext, useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer';
import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_FAILED, REGISTER_SUCCESS, LOAD_USER, LOGOUT, AUTH_ERROR } from '../Types';
import axios from "axios";
import AuthToken from '../AuthToken';
interface Props { }

function AuthState(props: { children: React.ReactNode; }) {
    const initialState = {
        token: localStorage.getItem("token"),
        isAutenticated: null,
        loading: true,
        error: null,
        user: null,
    }

    const authContext = useContext(AuthContext);
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            AuthToken(localStorage.token);
        }
        try {
            const res = await axios.get("/api/auth");
            dispatch({ type: LOAD_USER, payload: res.data });
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: error.response.data.msg })
        }
    };

    // Login User
    // LOGIN_SUCCESS
    // LOGIN_FAILED
    // Register User
    // REGISTER_FAILED
    // REGISTER_SUCCESS
    // Logout
    // LOGOUT

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAutenticated: state.isAutenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            loadUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;