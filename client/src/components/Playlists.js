import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';


class Playlists extends Component {
    state = {
        playlists: [],
        newPlaylist: {}
    }
    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios.get('/api/playlists')
            .then((res) => {
                console.log(res.data)
                this.setState({ playlists: res.data })
            })
    }
    handleChange = (e) => {
        const newPlaylist = { ...this.state.newPlaylist }
        newPlaylist[e.target.name] = e.target.value
        this.setState({ newPlaylist })
    }
    addPlaylist = () => {
        axios.post(`/api/playlists/`, this.state.newPlaylist)
            .then((res) => {
                const newPlaylist = [...this.state.playlists]
                newPlaylist.push(res.data)
                this.setState({ playlists: newPlaylist })
            })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className='page'>
                    <h1>Playlists</h1>
                    {this.state.playlists.map((playlists, i) => (
                        <div key={i}>
                            <div>
                                <Link to={`/playlists/${playlists._id}`}> <h2>{playlists.name}</h2></Link>
                                <p>{playlists.genre}</p>

                            </div>
                        </div>
                    ))}
                </div>
                <input type='text' name='name' placeholder='Name' onChange={(e) => this.handleChange(e)} />
                <input type='text' name='genre' placeholder='Genre' onChange={(e) => this.handleChange(e)} />
                <button onClick={this.addPlaylist}>Create Playlist</button>
            </div>
        );
    }
}

export default Playlists;