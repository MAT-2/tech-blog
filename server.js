const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");
const routes = require("./controllers");
const session = require("express-session");
// const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");

//Initializing express.js
const app = express();
const PORT = process.env.PORT || 3001;

//Handlebar.jS initialization
const hbs = exhbs.create();

//Initializing Sequelize
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 200,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("The server is now live!"));
});
