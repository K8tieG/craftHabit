import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login /Login';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  const [userId, setUserId] = useState(null);

  const handleUserId = (userId) => {
    setUserId(userId) 
  };
  // console.log(userId);
  
  return (
    <Router>
      <Navbar userId={userId} handleUserId={handleUserId} />
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login {...props} handleUserId={handleUserId} />}
        />
        <Route path="/register" component={Register} />
        <Route
          path="/landing"
          render={(props) => <Landing {...props} handleUserId={handleUserId} userId={userId} />}
        />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;


