import React, { ReactElement, Fragment, useState, FormEvent, useContext, useEffect } from 'react';
import AuthContext from '../context/Auth/AuthContext';

function Home() {
    const authContext = useContext(AuthContext);
    const { loadUser, error } = authContext;
    const [login, setlogin] = useState(false);
    const [user, setuser] = useState({ username: "", email: "", password: "", password2: "" });
    const { username, email, password, password2 } = user;

    const onSignInChange = (e: any) => { setuser({ ...user, [e.target.name]: e.target.value }); };
    const onSignInSubmit = (e: any) => { e.preventDefault(); console.log(user); }

    useEffect(() => {
        loadUser();
        if (error) {
            console.log(error);
        };
    }, [error]);

    const signin = <div>
        <form className="form-signin" onSubmit={onSignInSubmit}>
            <input type="email" name="email" value={email} id="inputEmail" className="form-control" placeholder="Email address" onChange={onSignInChange} required />
            <input type="password" name="password" value={password} id="inputPassword" className="form-control" placeholder="Password" onChange={onSignInChange} required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <p id="logintxt">Don't have an Account , Want to <button className="btn-link" onClick={() => setlogin(false)}>Register</button></p>
    </div>;
    const signup = <div>
        <form className="form-signup" onSubmit={onSignInSubmit}>
            <input type="text" name="username" value={username} onChange={onSignInChange} className="form-control" placeholder="Username" required />
            <input type="email" name="email" value={email} onChange={onSignInChange} className="form-control" placeholder="Email address" required />
            <input type="password" name="password" value={password} onChange={onSignInChange} className="form-control" placeholder="Password" required />
            <input type="password" name="password2" value={password2} onChange={onSignInChange} className="form-control" placeholder="Confirm Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
        <p id="logintxt">Already have an Account , Want to <button className="btn-link" onClick={() => setlogin(true)}>Login</button></p>
    </div>;
    return (
        <Fragment>
            <div className="text-center">
                <h1 id="weltxt">Welocme to your Todo List</h1>
                <h3 id="strtxt">Let's Start By Making a Account</h3>
                {login ? signin : signup}
            </div>
        </Fragment>
    )
}
export default Home;
