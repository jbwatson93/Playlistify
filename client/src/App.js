import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash'
import Playlists from './components/Playlists'
import Playlist from './components/Playlist'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/playlists" component={Playlists}/>
          <Route exact path="/playlists/:id" component={Playlist}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
