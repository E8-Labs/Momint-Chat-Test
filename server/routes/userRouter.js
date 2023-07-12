const express = require("express");
const Router = express.Router();
const {verifyJwtToken} = require("../middleware/jwtmiddleware");
const {Register, Login, Profile, Users} = require("../controllers/UserController");



Router.post("/register", Register);
Router.post("/login", Login);
Router.get("/my_profile", verifyJwtToken, Profile);
Router.get("/", verifyJwtToken, Users)

module.exports = Router;