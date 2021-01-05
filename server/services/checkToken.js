const jwt = require('jsonwebtoken');
require('dotenv').config();

const privateKey = process.env.JWT_SECRET;

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  jwt.verify(token, privateKey, (err, decoded) => {
    if (decoded) {
      req.profileName = decoded.data.name;
      req.profileEmail = decoded.data.email;
      req.profileId = decoded.data.id;
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });
};

module.exports = checkToken;
