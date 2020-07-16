import React, { Component } from "react";
import fire from "../config/Fire";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Events from "../components/events/Events";
import AddEvent from "../components/events/AddEvent";
import Header from "../components/layout/Header";
import About from "../components/pages/About";
import NotFound from "../components/pages/NotFound";
import { Provider } from "react-redux";
import store from "../store";

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header brand="FindMyEvents" />

            <div className="container">
              <div class="logoutbutton" style={{ float: "right" }}>
                <button className="btn btn-info" onClick={this.logout}>
                  logout
                </button>
              </div>
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />

                <Route exact path="/about" component={About} />

                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Home;
