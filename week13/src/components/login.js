import React from "react";

export default class Login extends React.Component {
    //creating the function for the login. Added buttons for a password reset and to create an account.
    render() {
        return (
            //wrapping the form in a div to be styled
        <div id="formDiv" className="container-sm border rounded bg-secondary p-4 position-absolute top-50 start-50 translate-middle align-items-center">
            <h2 className="pb-4">Login</h2>
            <form id="loginForm align-items-center">
                <div className="mb-3">
                    <label htmlFor="emlInpt" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id='emlInpt'></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwInpt" className="form-label">Password</label>
                    <input type="password" className="form-control mb-4" id='pwInpt'></input>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Log In</button>
            </form>
            <button className="btn btn-warning mb-3">Forgot Password?</button><br />
            <button className="btn btn-success">Create Account</button>
        </div>
        )
    }
}