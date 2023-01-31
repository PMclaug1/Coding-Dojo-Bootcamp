const Song = require("../models/song.model")

// test
module.exports.testApi = (req, res) => {
    res.json({status: "Test API successful"})
}

// create
module.exports.addSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
    .then(song => res.json(song))
    .catch(err => res.status(400).json(err))
}

// read all
module.exports.allSongs = (req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
}

// read one
module.exports.oneSong = (req, res) => {
    const idFromParams = req.params.id
    Song.findOne({_id: idFromParams})
    .then(onesong => res.json(onesong))
    .catch(err => res.json(err))
}

// updateSong
module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id
    const newValue = req.body
    Song.findOneAndUpdate({_id: idFromParams}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}

// delete
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}