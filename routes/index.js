const express = require('express')
const router = express.Router()

const playlistController = require('../controllers/playlistController')
const songController = require('../controllers/songController')

router.get('/api/playlists', playlistController.index)
router.post('/api/playlists', playlistController.create)
router.get('/api/playlists/:id', playlistController.show)
router.patch('/api/playlists/:id', playlistController.update)
router.delete('/api/playlists/:id', playlistController.delete)

router.get('/api/songs', songController.index)
router.post('/api/songs', songController.create)
router.get('/api/songs/:id', songController.show)
router.patch('/api/songs/:id', songController.update)
router.delete('/api/songs/:id', songController.delete)



module.exports = router