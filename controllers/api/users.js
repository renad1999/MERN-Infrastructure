const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  addToWishlist, 
  index
};
 
async function addToWishlist(req, res) {
  try {
    const {itemId} = req.params
    const user = await User.findById(req.user._id)
    const inWishlist = user.wishlist.includes(itemId)
    if (!inWishlist ) {
      user.wishlist.push(itemId)
      await user.save();
    }
    return res.json(user.wishlist) 
  
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}


async function index(req, res) {
  try {
    const user = await User.findById(req.user._id);
    return res.json(user.wishlist); 
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}



function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}