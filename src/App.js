import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login /Login';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/landing" component={Landing} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;


