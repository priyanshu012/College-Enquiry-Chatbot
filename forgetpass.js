import React, { Component } from "react";

export default class forgetpass extends Component {
  render() {
    return (
      <form>
        <h3>Forget password ?</h3>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter registered email"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Get OTP
        </button>
    </form>
    )
  }
}
 