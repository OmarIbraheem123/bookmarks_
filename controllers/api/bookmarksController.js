const Bookmark = require('../models/bookmarks')


module.exports = {
    create,
    index,
    update,
    destory,
    jsonBookmark,
    jsonBookmarks
}


function jsonBookmarks (_, res) {
    res.json(res.local.data.bookmarks)
}

function jsonBookmark (_, res) {
    res.json(res.local.data.bookmark)
}

//Create
async function create(req, res, next){
    try {
        const bookmark = await Bookmark.create(req.body)
        res.locals.data.bookmarks = bookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//index
async function index(req, res, next) {
    try {
        const bookmarks = await Bookmark.findById(req.params.id)
        res.locals.data.bookmarks = bookmarks
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//update

async function update(req, res, next) {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.locals.data.bookmark = bookmark
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//Destroy

async function destory(req, res, next) {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}