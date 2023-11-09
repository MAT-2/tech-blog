const router = require("express").Router();
const { Post } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
  try {
    const postNew = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postNew);
  } catch (err) {
    console.log(err);
  }
});
