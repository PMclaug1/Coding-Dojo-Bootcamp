const Joke = require("../models/joke.model")

module.exports.testApi = (req, res) => {
    res.json({status: 'Im looking good capt.'})
}


module.exports.addJoke = (req, response) => {
    // const newJoke = req.body
    Joke.create(req.body)
    .then(joke => response.json(joke))
    //response.status(400).json(err)
    .catch(err => response.status(400).json(err))
}

//allJokes
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

//oneJoke
module.exports.oneJoke = (req, res) => {
    const idFromSpace = req.params.id
    Joke.findOne({_id: idFromSpace})
    .then(o => res.json(o))
    .catch(err => res.json(err))
}

//updateJoke
module.exports.updateJoke = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Joke.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}

//deleteJoke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}