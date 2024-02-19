const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')

//Index
router.get('/', bookmarkCtrl.index, bookmarkCtrl.jsonBookmark)
//Create
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmark)
//Delete
router.delete('/:id', bookmarkCtrl.destory, bookmarkCtrl.jsonBookmark)
//Update
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmark)

module.exports = router