const Post = require("./Post");
const User = require("./User");

// Post.hasMany(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Post, User };
