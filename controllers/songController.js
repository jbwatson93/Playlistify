const Song = require('../models/Song')

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
        Song.create(req.body)
            .then((song) => {
                res.send(song)
            })
    }
}
module.exports = playlistController