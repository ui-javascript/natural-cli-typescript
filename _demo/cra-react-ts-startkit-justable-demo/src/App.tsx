import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

export default () => (
  <Router>
    <>
      <Route exact={true} path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </>
  </Router>
)