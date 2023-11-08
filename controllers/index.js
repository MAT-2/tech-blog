const router = require("express").Router();

//Will use later
// const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
//will use later that is commented out.
// router.use("/api", apiRoutes);

module.exports = router;
