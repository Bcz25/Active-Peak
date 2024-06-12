const router = require("express").Router();
const userRoutes = require("./userRoutes");
const routineRoutes = require("./routineRoutes");
const exerciseRoutes = require("./exerciseRoutes");

router.use("/users", userRoutes);
router.use("/routines", routineRoutes);
router.use("/exercises", exerciseRoutes);

module.exports = router;
