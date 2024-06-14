const axios = require("axios");
const router = require("express").Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

// Gets the log in page
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get signup page 
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logs the user into their account
router.post("/login", async (req, res) => {
  try {
    // Find the user by their email
    const user = await Users.findOne({ where: { email: req.body.email } });

    // If the user was not found, send an error
    if (!user) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    // Check if the entered password matches the stored password
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    // If the password was invalid, send an error
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    // If the password was valid, log the user in
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.users_name = user.users_name;
      req.session.logged_in = true;

      res.redirect(`/profile/${user.users_name}`);
    });
 
  } catch (err) {
    res.status(500).json(err);
  }
});
// Logs user out of account
router.post("/logout", async (req, res) => { 
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

// Creates a new user account
router.post("/signup", async (req, res) =>{
  try {
    const newUser = await Users.create({
      email: req.body.email,
      users_name: req.body.users_name,
      password: req.body.password, // This will be hashed by the beforeCreate hook
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.redirect(`/profile/${newUser.users_name}`);
    });
  } catch (err) {
    res.status(500).render('ERR', { errorMessage: err.message });
  }
});
// // Example route using axios
// router.get("/some-route", async (req, res) => {
//     try {
//       const response = await axios.get("https://api.example.com/data");
//       res.json(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       res.status(500).json({ error: "Error fetching data" });
//     }
//   });

module.exports = router;
