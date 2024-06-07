const router = require('express').Router();
const { Users } = require('../../models');

// route to create a new user and create a session for the user using the session middleware
router.post('/', async (req, res) => {
  try {
    // Line 8: The user data is created using the create method
    const userData = await Users.create(req.body);
    // Line 10-12: The user_id and logged_in properties are set on the session object
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Line 14-15: The user data is sent back as a JSON response
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login route to verify user credentials and log the user in
router.post('/login', async (req, res) => {
  try {
    // Line 25: The user data is found using the findOne method
    const userData = await Users.findOne({ where: { email: req.body.email } });
    // Line 27-31: If the user data is not found or the password is incorrect, a 400 status is returned with a message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Line 34: The checkPassword method is called on the user data to verify the password
    const validPassword = await userData.checkPassword(req.body.password);
    // Line 36-40: If the password is incorrect, a 400 status is returned with a message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Line 43-47: The user_id and logged_in properties are set on the session object and the user data is serialized and sent back as a JSON response
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// logout route to destroy the session and log the user out
router.post('/logout', (req, res) => {
  // Line 57-62: If the user is logged in, the session is destroyed and a 204 status is returned with no content (204 status)
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;