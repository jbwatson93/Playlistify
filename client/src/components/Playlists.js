import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';


class Playlists extends Component {
    state = {
        playlists: [],
        newPlaylist: {
            genre: 'Random'
        },
        genre: 'Random',
        sorted: false,
    }
    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios.get('/api/playlists')
            .then((res) => {
                
                this.setState({ playlists: res.data })
            })
    }
    handleChange = (e) => {
        const newPlaylist = { ...this.state.newPlaylist }
        newPlaylist[e.target.name] = e.target.value
        this.setState({ newPlaylist })
    }
    handleChange2 = (e) => {
       
        this.setState({genre: e.target.value})
    }
    addPlaylist = () => {
        axios.post(`/api/playlists/`, this.state.newPlaylist)
            .then((res) => {
                const newPlaylist = [...this.state.playlists]
                newPlaylist.push(res.data)
                this.setState({ playlists: newPlaylist })
            })
    }
    sortGenre = () => {
      const sorted = this.state.playlists.filter(playlist => playlist.genre === this.state.genre)
      
        this.setState({playlists: sorted, sorted:true})
      
    }
    sortAgain = () => {
        this.getPlaylists()
        this.setState({sorted: false})
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className='page'>
                    <h1 className='pagetitle'>Playlists</h1>
                    {this.state.sorted ? <button className='addSong' onClick={this.sortAgain}>Sort Again</button>
                    : <div>
                    <select name='genre' onChange={(e) => this.handleChange2(e)}>
                    <option value="Random">Random</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Rock">Rock</option>
                    <option value="Indie">Indie</option>
                    <option value="Country">Country</option>
                    <option value="R+B">R+B</option>
                    <option value="Latin">Latin</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                    <option value="Punk">Punk</option>
                </select>
                <button onClick={this.sortGenre} className='addSong'>Sort By Genre</button> </div>}
                    {this.state.playlists.map((playlists, i) => (
                        <div key={i}>
                            <div className='playlistList'>
                                <Link className='link' to={`/playlists/${playlists._id}`}> <h2>{playlists.name}</h2></Link>
                                <p> Genre:{playlists.genre}</p>

                            </div>
                        </div>
                    ))}
                </div>
                <div className='addPlaylist'>
                <input type='text' name='name' placeholder='Name' onChange={(e) => this.handleChange(e)} />
                {/* <input type='text' name='genre' placeholder='Genre' onChange={(e) => this.handleChange(e)} /> */}
                <select name='genre' onChange={(e) => this.handleChange(e)}>
                    <option value="Random">Random</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Rock">Rock</option>
                    <option value="Indie">Indie</option>
                    <option value="Country">Country</option>
                    <option value="R+B">R+B</option>
                    <option value="Latin">Latin</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                    <option value="Punk">Punk</option>
                </select>
                <button className='addSong' onClick={this.addPlaylist}>Create Playlist</button>
                </div>
            </div>
        );
    }
}

export default Playlists;