const router = require('express').Router();
const { WorkoutTemplate } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    // Line 9-11: a new post is created and the user_id is set to the session's user_id
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Line 14: The new post is serialized and sent back as a JSON response
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;