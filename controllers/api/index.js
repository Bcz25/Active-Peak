<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
=======
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const routineRoutes = require("./routineRoutes");
const exerciseRoutes = require("./exerciseRoutes");

router.use("/users", userRoutes);
router.use("/routines", routineRoutes);
router.use("/exercises", exerciseRoutes);
>>>>>>> 077726c1e35ccedb8a4dd07d1ab101d06b48cf51

module.exports = router;
