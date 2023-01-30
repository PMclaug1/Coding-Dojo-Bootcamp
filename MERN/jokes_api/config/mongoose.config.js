const mongoose = require("mongoose")

const database = "jokesDB"
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a connection to ${database}`))
.catch((error) => console.log("Something is wrong", error))