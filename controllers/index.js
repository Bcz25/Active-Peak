// It imports the express router and the api routes and home routes.
const router = require('express').Router();
const apiRoutes = require('./api');
const landingpageRoutes = require('./landingpageRoutes');
const dashboardRoutes = require('./dashboardRoutes');
// It then uses the router to use the home routes and api routes. Finally, it exports the router.
router.use('/api', apiRoutes);
router.use('/', landingpageRoutes);
router.use('/dashboard', dashboardRoutes);
module.exports = router;