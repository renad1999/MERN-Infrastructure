const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const itemSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true}

  },
  {
  
    timestamps: true,
  }
);


module.exports  = mongoose.model("Item", itemSchema);
