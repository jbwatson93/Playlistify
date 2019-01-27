const Playlist = require('../models/Playlist')

const playlistController = {
    index: (req, res) => {
        Playlist.find({}).then((playlists) => {
          res.json(playlists)
          console.log(playlists)
        }).catch((err) => {
          console.log(err)
        })
      },
      show: (req, res) => {
        Playlist.findById(req.params.id).populate('songs')
            .then((playlist) => {
                res.send(playlist)
            })
    },
    update: (req, res) => {
        Playlist.findByIdAndUpdate(req.params.id, req.body)
            .then((updatedPlaylist) => {
                updatedPlaylist.save()
                res.send(updatedPlaylist)
            })
    },
    delete: (req, res) => {
        Playlist.findByIdAndDelete(req.params.id)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Playlist.create(req.body)
            .then((playlist) => {
                res.send(playlist)
            })
    }
}
module.exports = playlistController