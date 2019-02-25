import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./containers/HomePage";
import MainPage from "./containers/MainPage";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";
import Profile from "./components/Profile";
import FilterByCity from "./components/FilterByCity";
import SearchBar from "./components/SearchBar";
import CurrentLocation from "./components/CurrentLocation";
import MapComponent from "./components/MapComponent";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mainpage" component={MainPage} />
          <Route exact path="/filter" component={FilterByCity} />
          <Route exact path="/parkinggarage" component={SearchBar} />
          <Route exact path="/address" component={MapComponent} />
          <Route exact path="currentLocation" component={CurrentLocation} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

const store = createStore(todoApp);
Root.propTypes = {
  store: PropTypes.object.isRequired
};
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
