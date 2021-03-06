import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Search from "./pages/Search";
import './App.css';
import './App.sass';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/search">
          <Search />
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
