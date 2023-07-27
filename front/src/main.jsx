import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Decklists from "./pages/Decklists";
import DeckEditor from "./pages/DeckEditor";
import Provider from "./context/Provider";
import DeckInfo from "./pages/DeckInfo";
import Banlist from "./pages/Banlist";
import Styled from "./styles.jsx";
import "./styles.css"
import CustomRoute from "./components/CustomRoute";
import { Route, Redirect, Switch } from "wouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
          <Route path="/decks" component={Decklists} />
          <Route path="/deck/:deck" component={DeckInfo} />
          <Route path="/decks/:user" component={Decklists} />
          <Route path="/editor/create" component={DeckEditor} />
          <Route path="/editor/:deck" component={DeckEditor} />
          <Route path="/banlist" component={Banlist} />
          <Redirect to="/"/>
        </Switch>
      </Styled.Wrapper>
    </Provider>
  </React.StrictMode>
);
