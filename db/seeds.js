const Playlist = require('../models/Playlist')
const Song = require('../models/Song')
const mongoose = require('./connections')

const song1 = new Song({
    url: 'https://www.youtube.com/watch?v=rBn06ZRU-4o',
    name: 'Buffalo',
    artist: 'Toro y Moi'
})

const song2 = new Song({
    url: 'https://www.youtube.com/watch?v=p1kfltseJ58',
    name: 'Always Wanting More',
    artist: 'Jay Reatard'
})

const song3 = new Song({
    url: 'https://www.youtube.com/watch?v=kLPAs46pavA',
    name: 'Be About You',
    artist: 'Winston Surfshirt'
})

const song4 = new Song({
    url: 'https://www.youtube.com/watch?v=1Wl1B7DPegc',
    name: 'Love it if we made it',
    artist: 'The 1975'
})
const song5 = new Song({
    url: 'https://www.youtube.com/watch?v=Yv9aVPD6ymw',
    name: 'Better to lie',
    artist: 'Benny Blanco'
})

const playlist1 = new Playlist({
    name: 'Funky Mix',
    genre: 'random',
    songs: [song1,song2,song3]
})

const playlist2 = new Playlist({
    name: 'Pop Favorites',
    genre: 'pop',
    songs: [song4,song5]
})

Playlist.deleteMany({})
    .then(() => Song.deleteMany({}))
    .then(() => Song.insertMany([song1,song2,song3,song4,song5]))
    .then(() => playlist1.save())
    .then(() => playlist2.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())