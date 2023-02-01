const mongoose = require("mongoose")

const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("db connected");
    } catch (error) {
        console.log(`Unable to Connect ${error}`)
        process.exit() 
    }
}

module.exports = db