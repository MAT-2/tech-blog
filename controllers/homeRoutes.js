const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

//Routes to get to each of the handlebars files.

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Area that shows all the posts and to create a new post.
router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    res.render("post");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
