const router = require('express').Router();
const { Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    // create a new comment with the user id attached
    const newExercise = await Exercise.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // send the new serialized comment back as a JSON response
    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;