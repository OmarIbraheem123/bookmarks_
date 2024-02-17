const mongoose = require('mongoose')


const bookmarkSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String}
})


const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = Bookmark