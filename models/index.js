const Post = require("./Post");
const User = require("./User");

User.hasMany(Post, {
  foreignKey: "",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "",
});

module.exports = { Post, User };
