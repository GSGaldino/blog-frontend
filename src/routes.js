import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';
import New from './pages/New';
import Login from './pages/Login';

export default function Routes() {
  function isAuth() {
    var user = localStorage.getItem('@GabrielSoares:JWT_TOKEN')
    if (!user) {
      return false
    }

    return true
  }

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuth()
          ? <Component {...props} />
          : <Redirect to="login" />
      )}
    />
  )
  
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <PrivateRoute path="/new" exact component={New} />
        <Route path="/login" exact component={Login} />
        <Route path="/posts/:post" component={Post} />

      </Switch>
    </BrowserRouter>
  )
}
