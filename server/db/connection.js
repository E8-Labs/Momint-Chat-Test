const mongoose = require("mongoose");
require("dotenv").config();

const connection =require('mongoose');
connection.connect(process.env.DB_URI);

module.exports = connection;