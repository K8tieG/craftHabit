import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Login from './components/Login /Login';
import Register from './components/Register/Register';
import Landing from './components/Landing/Landing';
// import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  const [userId, setUserId] = useState(null);

  const handleUserId = (userId) => {
    setUserId(userId) 
  };
  
  return (
    <Router>
      {/* <Navbar userId={userId} handleUserId={handleUserId} /> */}
      <Switch>
        <Route 
      path="/"
      exact
      render={()=> <Welcome />}
      />
        <Route
          path="/login"
          exact
          render={(props) => <Login {...props} handleUserId={handleUserId} />}
        />
        <Route path="/register" component={Register} />
        <Route
          path="/landing"
          exact
          render={(props) => (
            <Landing {...props} handleUserId={handleUserId} userId={userId} />
          )}
        />
        <Route
          path="/profile"
          exact
          render={(props) => (
            <Profile {...props} handleUserId={handleUserId} userId={userId} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;


