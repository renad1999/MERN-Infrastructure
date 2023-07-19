const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: {type: Schema.Types.ObjectId, ref: 'Description'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;
