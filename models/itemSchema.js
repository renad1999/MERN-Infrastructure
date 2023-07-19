const Schema = require('mongoose').Schema;


const reviewSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
});


const itemSchema = new Schema({
  name: { type: String, required: true },
  description: {type: Schema.Types.ObjectId, ref: 'Description'},
  price: { type: Number, required: true },
  reviews:[reviewSchema]
}, {
  timestamps: true
});

module.exports = itemSchema;
