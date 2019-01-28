import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Splash extends Component {
    render() {
        return (
            <div className='splashpage'>
            <div className='splashclick'>
                <Link to={'/playlists'} className='link'> <h1>Enter Playlistify </h1> 
                    <h3> Create Playlists from different songs all over the web</h3> </Link>
                    </div>
            </div>
        );
    }
}

export default Splash;