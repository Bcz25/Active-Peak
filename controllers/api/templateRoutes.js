const router = require("express").Router();
const { Template } = require("../../models");
const withAuth = require("../../utils/authGuard");

// Get all templates
router.get("/", async (req, res) => {
  try {
    const templateData = await Template.findAll();

    res.status(200).json(templateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single template
router.get("/:id", async (req, res) => {
  try {
    const templateData = await Template.findByPk(req.params.id);

    if (!templateData) {
      res.status(404).json({ message: "No template found with this id!" });
      return;
    }

    res.status(200).json(templateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new template
router.post("/", withAuth, async (req, res) => {
  try {
    const newTemplate = await Template.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTemplate);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
