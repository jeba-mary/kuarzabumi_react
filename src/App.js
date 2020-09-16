import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="container-fluid">
     <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
