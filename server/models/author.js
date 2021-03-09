const mongoose = require('mongoose')
const Scheam = mongoose.Schema

const authorSchema = new Scheam({
    name: String,
    age: Number
})

module.exports = mongoose.model('Author', authorSchema)