import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import './App.css';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
