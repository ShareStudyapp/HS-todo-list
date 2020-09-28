import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';

function App (props) {
  return (
    <div>
      {/* <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      </div> */}
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;
