const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    note: {
        type: String,
        // required: [true, "please add the user name"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Data", dataSchema)