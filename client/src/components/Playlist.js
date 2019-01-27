import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Song from './Song'
import Navbar from './Navbar';
class Playlist extends Component {
    state = {
        playlists:{
            name: "",
            genre:"",
            songs: [{
                name: "",
                artist: '',
                url: '/'},],    
        },
        nowPlaying: 0,
        loaded: false,
        playing: false,
        newSong: {
            name: "",
            artist: '',
            url: ''
        }
    }
    playPause =() => {
        this.setState( {playing: !this.state.playing})
    }
    componentDidMount() {
        this.getPlaylists()
      }
      goback = () =>{
        if(0 === this.state.nowPlaying){
            this.setState({nowPlaying: this.state.playlists.songs.length-1 })
        }
        else {this.setState({nowPlaying: this.state.nowPlaying-1})}
       
    }
    nowPlaying = () =>{
        if(this.state.playlists.songs.length-1 === this.state.nowPlaying){
            this.setState({nowPlaying: 0})
        }
        else {this.setState({nowPlaying: this.state.nowPlaying+1})}
       
    }
    addSong = () => {
        axios.post(`/api/playlists/${this.props.match.params.id}/songs`, this.state.newSong)
        .then((res) => {
            const newSong = {...this.state.playlists}
            
            newSong.songs.push(res.data)
            this.setState({playlists: newSong})
        })
    }
    
      getPlaylists = () => {
        axios.get(`/api/playlists/${this.props.match.params.id}`)
        .then((res) => {
          console.log(res.data)
          this.setState({ 
              playlists: res.data,
            loaded: true})
        })
      }
      handleChange = (e) => {
        const newSong = { ...this.state.newSong }
        newSong[e.target.name] = e.target.value
        this.setState({ newSong })
    }
    render() {
        const song =  this.state.playlists.songs[this.state.nowPlaying]
        const back = '|<'
        return (
            <div>
               <Navbar/>
               <div className='page'>
                   <h1>{this.state.playlists.name}</h1>
                   <p>{this.state.playlists.genre}</p>
                   <button>Edit</button> 
                 
            {this.state.loaded ? <div className='player-wrapper'><ReactPlayer className='react-player' 
             controls={true} url={song.url} 
             onEnded={this.nowPlaying} playing={this.state.playing}
             width='80%'
          height='80%'/> </div>: null}
          <div>
          <button className="controls" onClick={this.goback} > {back}</button>
          <button className="controls" onClick={this.playPause}>Play</button>
                <button className="controls" onClick={this.nowPlaying}>>|</button>
                </div>
            {this.state.playlists.songs.map((song, i)=>(
                <Song getSong={this.getPlaylists} id={song._id} name={song.name} artist={song.artist} index={i} nowplaying={this.state.nowPlaying}/>
            ))}
            <div> <input type='text' name='artist' placeholder='Artist' onChange={(e) => this.handleChange(e)}/> 
            <input type='text' name='name' placeholder='Song' onChange={(e) => this.handleChange(e)}/>
             <input type='text' name='url' placeholder='URL' onChange={(e) => this.handleChange(e)}/> 
             <button className='addSong' onClick={this.addSong}>Add Song</button>
               </div>
                </div>
            </div>
        );   }
}

export default Playlist;