import React, { Component } from 'react';
import axios from 'axios'
class Song extends Component {
    state = {
        nowPlaying: this.props.nowplaying
    }
    deleteSong = () => {
        axios.delete(`/api/song/${this.props.id}`)
        .then(this.props.getSong)
    }
    render() {
        return (
            <div className="songs">
                <h3>{this.props.name} - {this.props.artist}</h3> {this.props.nowplaying === this.props.index?<h3>Playing</h3>  :<button className='addSong' onClick={this.deleteSong}>Delete</button> }
            </div>
        );
    }
}

export default Song;