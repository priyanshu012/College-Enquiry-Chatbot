import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from '../firebase/firebase.utils.js';

export default class Login extends Component {
  render() {
    return (
      <div>
      <h1 className="title10">ChatBot</h1>      

        <div className="htya">
          <img src="/Images/iop.jpg" alt="" />
        </div>
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
          <button onClick={ signInWithGoogle } className="btn btn-primary btn-block">
          Sign in with google
        </button>
          <p className="forgot-password text-right">
            <Link to="/forget-pass">Forgot password?</Link>
          </p>
        </form>
      </div>
    );
  }
}
