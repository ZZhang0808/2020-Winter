import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import User from './User';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
