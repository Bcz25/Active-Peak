// These variables are used to import the necessary routes.
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileRoutes");
// Middle ware to direct the user to the correct route.
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/profile", profileRoutes);
// Export the router.
module.exports = router;
