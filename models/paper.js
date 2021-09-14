
const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("paper",BookSchema)