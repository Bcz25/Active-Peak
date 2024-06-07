const router = require('express').Router();
const userRoutes = require('./userRoutes');
const templateRoutes = require('./templateRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/templates', templateRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;