const Song = require("../models/song.model")

module.exports.testApi = (req, res) => {
    res.json({status: 'Im looking good capt.'})
}

//addSong
module.exports.addSong = (req, response) => {
    // const newSong = req.body
    Song.create(req.body)
    .then(song => response.json(song))
    //response.status(400).json(err)
    .catch(err => response.status(400).json(err))
}

//allSongs
module.exports.allSongs = (req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
}

//oneSong
module.exports.oneSong = (req, res) => {
    const idFromSpace = req.params.id
    Song.findOne({_id: idFromSpace})
    .then(o => res.json(o))
    .catch(err => res.json(err))
}

//updateSong
module.exports.updateSong = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Song.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}

//deleteSong
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}