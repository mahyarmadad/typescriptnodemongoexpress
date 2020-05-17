import React, { ReactElement, useContext } from 'react'
import AlertContext from '../Alert/AletContext'

interface Props { }
function Alerts() {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    return (
        alert && alert.map(alerts => (
            <div key={alerts.id} className={`alert alert-${alerts.type}`} role="alert" >
                {alerts.msg}
            </div >
        ))
    );
}

export default Alerts
