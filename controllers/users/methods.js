const { createUser } = require("./allMethods/createUser.js");
const { getUser } = require("./allMethods/getUser.js");
const { login } = require("./allMethods/login.js");
const { updateUser } = require("./allMethods/updateUser.js");
const { activateUser, deactivateUser }=require("./allMethods/activateOrInActivate.js")

module.exports = { createUser, getUser, login, updateUser, activateUser, deactivateUser };
