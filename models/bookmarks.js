const mongoose = require('mongoose')


const bookmarkSchema = new mongoose.Schema({
    title: {type: String, require: true},
    url: {type: String, require: true}
})


const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = Bookmark