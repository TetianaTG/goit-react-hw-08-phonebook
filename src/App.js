import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import PhonebookPage from "./pages/PhonebookPage/PhonebookPage";
import PrivateRoute from "./services/PrivateRoute";
import authOperations from "./redux/auth/authOperations";
import withTheme from "./hoc/withTheme";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {
      themeConfig: { fontColor, bodybg },
    } = this.props;

    return (
      <BrowserRouter>
        <div style={{ color: fontColor, background: bodybg }}>
          <button
            type="submit"
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              borderColor: "white",
              height: "35px",
              width: "150px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            onClick={this.props.toggleTheme}
          >
            Change theme
          </button>
        </div>

        <Header />

        <Switch>
          <Route exact path="/" component={AuthPage} />
          <PrivateRoute path="/phonebook" component={PhonebookPage} />
          <Route path="/registration" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(withTheme(App));
