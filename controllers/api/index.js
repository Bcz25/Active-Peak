// These variables are used to import the necessary routes.
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const routineRoutes = require("./routineRoutes");
const exerciseRoutes = require("./exerciseRoutes");
// Middle ware used to direct the user to the correct route.
router.use("/users", userRoutes);
router.use("/routines", routineRoutes);
router.use("/exercises", exerciseRoutes);
// Export the router.
module.exports = router;
