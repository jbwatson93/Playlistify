const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Playlist = new Schema({
    name: String,
    genre: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
})

module.exports = mongoose.model('Playlist', Playlist)