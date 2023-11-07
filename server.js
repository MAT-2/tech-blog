const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");
const routes = require("controllers");
const session = require("express-session");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");

//Initializing express.js
const app = express();
const PORT = process.env.PORT || 3001;

//Handlebar.jS initialization
const hbs = exhbs.create({ helpers });

//Initializing Sequelize
const SequelizeStore = require("connect-session-sequelize")(session.Store);
