const mongoose = require("mongoose")

 const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please Provide Task "]
    },
    PhoneNo: {
        type: String,
        required: [true, "Please Provide Phone no"]
    }
})

module.exports =  mongoose.model("task", taskSchema)