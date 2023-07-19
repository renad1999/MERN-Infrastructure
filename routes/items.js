const express = require('express')
const { 
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem } = require('../controllers/itemsController');
const router = express.Router()

// get all items
router.get('/', getItems )


// router.get('/', itemsCtrl.index);
// router.get('/:id', itemsCtrl.show);

// get single item
router.get('/:id', getItem)

// post new item
router.post('/', createItem)

// delete a item
router.delete('/:id', deleteItem)

// update a item
router.patch('/:id', updateItem)

module.exports = router