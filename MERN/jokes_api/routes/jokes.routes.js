const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    //Test
    app.get("/api/test", JokeController.testApi)
    
    //Create one
    app.post("/api/jokes/new", JokeController.addJoke)
    
    // //Display all
    app.get("/api/jokes", JokeController.allJokes)

    // //Display one
    app.get("/api/jokes/:id", JokeController.oneJoke)

    // //Update one
    app.put("/api/joke/:id", JokeController.updateJoke)

    // //Delete one
    app.delete("/api/joke/:id", JokeController.deleteJoke)
}