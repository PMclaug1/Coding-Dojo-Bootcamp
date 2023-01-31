const SongController = require('../controllers/song.controller')

module.exports = (app) => {
    // test
    app.get("/api/test", SongController.testApi)

    // Create one
    app.post("/api/songs", SongController.addSong)

    // // Display all
    app.get("/api/songs", SongController.allSongs)

    // // Display one
    app.get("/api/songs/:id", SongController.oneSong)

    // // Update one
    app.put("/api/song/:id", SongController.updateSong)

    // // Delete
    app.delete("/api/song/:id", SongController.deleteSong)
}