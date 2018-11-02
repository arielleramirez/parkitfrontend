import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
import MainPage from "./MainPage";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ModalLogin />
          <ModalSignUp />
          <Route exact path="/mainpage" component={MainPage} />
        </div>
      </Router>
    );
  }
}

export default HomePage;
