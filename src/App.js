import React, { Component } from "react";
import "./App.css";
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDa6S5NWfO1VNrZi2kCA5fe53l9b9giKKo",
    authDomain: "imperium-reacjs.firebaseapp.com",
    databaseURL: "https://imperium-reacjs.firebaseio.com",
    projectId: "imperium-reacjs",
    storageBucket: "imperium-reacjs.appspot.com",
    messagingSenderId: "942938556860",
    appId: "1:942938556860:web:35cfde6a5afe96e3"
};
firebase.initializeApp(config);

const loading = () => (
  <div className="lds-roller">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
const Login = Loadable({
  loader: () => import("./views/Login/Login"),
  loading
});
const Monitores = Loadable({
  loader: () => import("./views/Monitores/Monitores"),
  loading
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Login - IMPERIUM" component={Login} />
          <Route
            exact
            path="/monitores"
            name="Monitores - IMPERIUM"
            component={Monitores}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
