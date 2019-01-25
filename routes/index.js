const express = require('express')
const router = express.Router()

const playlistController = require('../controllers/playlistController')

router.get('/api/playlists', playlistController.index)
router.post('/api/playlists', playlistController.create)
router.get('/api/playlists/:id', playlistController.show)
router.patch('/api/playlists/:id', playlistController.update)
router.delete('/api/playlists/:id', playlistController.delete)

router.post('/api/playlists/:playlistId/songs', songController.create)

module.exports = router