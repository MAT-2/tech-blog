const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

//Routes to get to each of the handlebars files.

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
    console.log(req.session);
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
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );
    res.render("dashboard", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({
      plain: true,
    });
    res.render("post", { ...post });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
