// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Description = require('./models/description');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
// let user, item, description, order;
// let users, items, descriptions, orders;
