const mongoose = require("mongoose")

const database = "MernDemo23"

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Established connection to ${database}`))
.catch((err) => console.log("Error with DB connection", err))