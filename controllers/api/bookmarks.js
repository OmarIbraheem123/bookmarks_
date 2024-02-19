const Bookmark = require('../../models/bookmarks')
require('dotenv').config()



function jsonBookmark (_, res) {
    res.json(res.locals.data.bookmark)
}






//Create
async function create(req, res, next){
    try {
        const createdBookmark = await Bookmark.create(req.body)
        res.locals.data.bookmark = createdBookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//index
async function index(req, res, next) {
    try {
        const listOfBookmarks = await Bookmark.find({})
        res.locals.data.bookmark = listOfBookmarks
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//update

async function update(req, res, next) {
    try {
        const updatedBookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.locals.data.bookmark = updatedBookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//Destroy

async function destory(req, res, next) {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


module.exports = {
    create,
    index,
    update,
    destory,
    jsonBookmark,
}