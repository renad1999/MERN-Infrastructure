const Item = require('../models/item');
const mongoose = require('mongoose');

// get all items 
const getItems = async (req, res) => {
  const items = await Item.find({}).sort({createdAt: -1})
  res.status(200).json(items)
}


// get single item
const getItem = async (req, res) => {
  const {id} = req.params
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const item = await Item.findById(id)

  if(!item){
    return res.status(404).json({error: 'No such item'})
  }
  res.status(200).json(item)
}


// create new item 
const createItem = async (req, res) => {
  const {image, name, price, description} = req.body


let emptyFields = []

if (!name) {
  emptyFields.push('name')

}

if(!image) {
  emptyFields.push('image')
}

if(!price) {
  emptyFields.push('price')
}

if(!description) {
  emptyFields.push('description')
}
if(emptyFields.length > 0) {
  return res.status(400).json({error: 'Please fill in all fields', emptyFields})
}

  try {
    const item = await Item.create({image, name, price, description})
    res.status(200).json(item)
 } catch (error) {
res.status(400).json({error: error.message})
 }
}


const deleteItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }

  const item = await Item.findOneAndDelete({_id: id})

  if (!item) {
    return res.status(400).json({error: 'No such item'})
  }
  res.status(200).json(item)
  }

// update item
const updateItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such item'})
  }
const item = await Item.findOneAndUpdate({_id: id}, {
  ...req.body
})
if (!item) {
  return res.status(400).json({error: 'No such item'})
}
res.status(200).json(item)
}


async function index(req, res) {
  // const items = await Item.find({}).sort('name').populate('').exec();


}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}





module.exports = {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
  show,
  index
};
