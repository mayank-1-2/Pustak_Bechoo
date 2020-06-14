import React, { Component } from 'react'
import './login.css'
import logo from '../pictures/login.png'
import { Link } from 'react-router-dom';
// import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login'

class Login extends Component {
    render() {
        return (
            <div className="login_parent">
                <div className="login_text" >
                    <div className="login_image">
                    </div>
                    <div className="login_form">
                        <form className="form-signin">
                            <Link to="/home"><img className="mb-4" src={logo} alt="" width="150" height="72"
                                style={{ borderRadius: "20px" }} /></Link>
                            <h1 className="h3 mb-3 font-weight-normal">Welcome Back</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="inputEmail"
                                className="form-control"
                                placeholder="Email address"
                                required
                                autoFocus
                            />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input
                                type="password"
                                id="inputPassword"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
        </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">
                                Sign in
      </button>
      <div>Don't have an account</div>
                            <Link to="/signup" className=" signup_redirect">Sign Up</Link>
                            <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login