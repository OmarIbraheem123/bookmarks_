const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../controller/bookmarks')

//Index
router.get('/:id', bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
//Create
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmarks)
//Delete
router.delete('/:id', bookmarkCtrl.destory, bookmarkCtrl.jsonBookmarks)
//Update
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmarks)

module.exports = router