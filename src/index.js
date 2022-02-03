 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { theme } from "./theme"
import HomeLayout from "layouts/Home";
import LoginLayout from "layouts/Login";
import ForgotPasswordLayout from "layouts/ForgotPassword";
import AdminLayout from "layouts/Admin";
import EmployeeLayout from "layouts/Employee";

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <HomeLayout {...props} />} />
      <Route exact path="/login" render={(props) => <LoginLayout {...props} />} />
      <Route exact path="/forgotpassword" render={(props) => <ForgotPasswordLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/employee" render={(props) => <EmployeeLayout {...props} />} />
    </Switch>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
