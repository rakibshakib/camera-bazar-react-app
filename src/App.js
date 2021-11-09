import './App.css';
import React from "react";
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/explore'>
              <Explore />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
