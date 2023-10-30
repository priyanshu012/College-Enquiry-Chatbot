import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import forgetpass from "./components/forgetpass";
import Canvas from "./components/canvas/canvas";
import { auth } from "./firebase/firebase.utils";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router currentUser= {this.state.currentUser} >
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                   {
                     `gicurrentUser` ?
                     <div className='nav-link' onClick= {()=>auth.signOut()}>Signout</div>
                     :
                     <Link></Link>
                   }
                </ul>
              </div>
            </div>
          </nav>
          <Canvas />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/forget-pass" component={forgetpass} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
