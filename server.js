// Line 2-10: Import the necessary modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Line 12: Create a new express app
const app = express();
// Line 14: Define the port
const PORT = process.env.PORT || 3001;
// Line 16-17: Create a new handlebars object and define the session object
const hbs = exphbs.create({ helpers });
// Line 18-26: Define the session object
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// Line 28 Use the session object
app.use(session(sess));
// Line 30-31: Define the engine and the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Line 33-35: Define the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Line 37: Use the routes
app.use(routes);
// Line 39-41: Sync the sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});