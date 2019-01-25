import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash'
import Playlists from './components/Playlists'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/playlists" component={Playlists}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
