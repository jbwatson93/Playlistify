const Song = require('../models/Song')
const Playlist = require('../models/Playlist')

const songController = {
    index: (req, res) => {
        Song.find().then((songs) => {
          res.json(songs)
        }).catch((err) => {
          console.log(err)
        })
      },
      show: (req, res) => {
        Song.findById(req.params.id)
            .then((song) => {
                res.send(song)
            })
    },
    update: (req, res) => {
        Song.findByIdAndUpdate(req.params.id, req.body)
            .then((updatedSong) => {
                updatedSong.save()
                res.send(updatedSong)
            })
    },
    delete: (req, res) => {
        Song.findByIdAndDelete(req.params.id)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        var plid = req.params.plid
        Playlist.findById(plid)
            .then((playlist) => {
                console.log(playlist)
                Song.create(req.body)
                    .then((newsong) => {
                        console.log(newsong)
                        playlist.songs.push(newsong)
                        playlist.save()
                        res.send(newsong)
                    })
            })
    }
}
module.exports = songController