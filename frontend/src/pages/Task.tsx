import React, { ReactElement, Fragment, useState, useContext, useEffect } from 'react'
import AuthContext from '../context/Auth/AuthContext';
import AlertContext from '../context/Alert/AletContext';

interface Props { }

function Task({ }: Props): ReactElement {
    const [hover, sethover] = useState(false);
    const authContext = useContext(AuthContext);
    const { loadUser, error } = authContext;
    const alertContext = useContext(AlertContext);


    useEffect(() => {
        loadUser();
        error && alertContext.setAlert(error, "danger");
    }, [error]);
    return (
        <Fragment>
            <div className="text-center">
                <form className="form-group form-row">
                    <input type="text" name="task" className="form-control" id="tsakfield" required />
                    <button type="submit" className="btn-outline-info" id="taskbtn">Add Task</button>
                </form>
                <ul className="list-group list-group-flush">
                    <li className={hover ? " d-flex justify-content-between align-items-center list-group-item active" : "d-flex justify-content-between align-items-center list-group-item"} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
                        Active Active item Active item Active item Active item
                        <div className="">
                            <span className="badge badge-secondary badge-pill"><i className="fa fa-pencil-square" aria-hidden="true"></i></span>
                            <span className="badge badge-success badge-pill"><i className="fa fa-check" aria-hidden="true"></i></span>
                            <span className="badge badge-danger badge-pill"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Task
