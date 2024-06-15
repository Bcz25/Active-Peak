// Import the necessary modules
const path = require("path");
const axios = require("axios");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// Create a new express app
const app = express();
// Define the port
const PORT = process.env.PORT || 3001;

// Create a new handlebars object and define the session object
const hbs = exphbs.create({ helpers });
// Define the session object
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// Use the session object
app.use(session(sess));
// Define the engine and the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Define the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// Use the routes
app.use(routes);
// Sync the sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
