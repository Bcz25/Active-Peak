// These variables are used to import the necessary routes.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const routineRoutes = require('./routineRoutes');
// Middle ware used to direct the user to the correct route.
router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/routines', routineRoutes);
// Export the router.
module.exports = router;
