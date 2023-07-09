import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Styled from "./styles.jsx";
import { Route, Redirect, Switch } from "wouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Styled.Wrapper>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </Styled.Wrapper>
  </React.StrictMode>
);
