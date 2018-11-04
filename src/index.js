import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers/todoApp";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import Filter from "./components/Filter";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mainpage" component={MainPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/filter" component={Filter} />
      </React.Fragment>
    </Router>
  </Provider>
);

const store = createStore(todoApp);
Root.propTypes = {
  store: PropTypes.object.isRequired
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
