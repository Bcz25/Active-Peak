// It imports the express router and the api routes and home routes.
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileRoutes");
// It then uses the router to use the home routes and api routes. Finally, it exports the router.
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/profile", profileRoutes);
module.exports = router;
