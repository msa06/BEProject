import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Nav}></Route>
        <Route path="/auth/login" exact={true} component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
