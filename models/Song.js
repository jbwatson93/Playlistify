const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Song = new Schema({
    url: String,
    name: String
   
})

module.exports = mongoose.model("Song", Song)