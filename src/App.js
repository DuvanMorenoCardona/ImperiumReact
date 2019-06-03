import React, { Component } from "react";
import "./App.css";
import Loadable from "react-loadable";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDL6EHnUwAbvMSlI4JbKOie_42iDUz80fk",
  authDomain: "monitoresweb.firebaseapp.com",
  databaseURL: "https://monitoresweb.firebaseio.com",
  projectId: "monitoresweb",
  storageBucket: "monitoresweb.appspot.com",
  messagingSenderId: "360560978157",
  appId: "1:360560978157:web:ad1f29159bb3bbf6"
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
// const Monitores = Loadable({
//   loader: () => import("./views/Monitores/Monitores"),
//   loading
// });

const Home = Loadable({
  loader: () => import("./views/home/home"),
  loading
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Login - IMPERIUM" component={Login} />
          <Route
            exact
            path="/Calendario"
            name="Home - IMPERIUM"
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
