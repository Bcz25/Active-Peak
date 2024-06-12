const axios = require("axios");
const router = require("express").Router();
const { Users } = require("../models");

// get all users
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get signup
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get login
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// post login
router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// get logout
router.get("/logout", async (req, res) => {
  try {
    res.render("logout");
  } catch (err) {
    res.status(500).json(err);
  }
});

// post logout
router.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
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
