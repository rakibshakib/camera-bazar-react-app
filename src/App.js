import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import OrderCamera from "./Pages/OrderCamera/OrderCamera";
import LoginPage from "./Pages/Login/LoginPage";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <PrivateRoute exact path="/camera-order/:id">
              <OrderCamera />
            </PrivateRoute>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
