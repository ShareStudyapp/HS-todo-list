import React, {} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';

function App (props) {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;
