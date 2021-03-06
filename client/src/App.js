import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import User from './User';
import PollList from './PollList';
import Poll from './Poll';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/poll" component={PollList} />
          <Route exact path="/poll/:key" component={Poll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
