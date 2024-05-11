const jwt = require("jsonwebtoken");
const jwtSecret = require("../static/static.json").jwtSecret;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["token"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({msg:"Token not found in header"});
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({msg:"Token Expired Please create token again"});
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
