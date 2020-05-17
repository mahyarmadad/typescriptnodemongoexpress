import React, { ReactElement, useContext, useReducer } from 'react'
import AlertContext from './AletContext'
import { SETALERT, REMOVEALERT } from "../Types";
import AlertReducer from './AlertReducer';

interface Props { }
function AlertState(props: { children: React.ReactNode; }): ReactElement {

    const [state, dispatch] = useReducer(AlertReducer, []);
    const setAlert = (msg: string, type: string, timeout = 5000) => {
        const id: Number = Math.random();
        dispatch({
            type: SETALERT,
            payload: { msg, type, id }
        });
        setTimeout(() => dispatch({
            type: REMOVEALERT,
            payload: id
        }), timeout);
    }
    return (
        <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
