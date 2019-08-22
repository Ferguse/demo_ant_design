import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "../../authContext";
import LoginForm from "../../pages/LoginPage/LoginPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../../pages/MainPage/MainPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/app*" component={MainPage} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
