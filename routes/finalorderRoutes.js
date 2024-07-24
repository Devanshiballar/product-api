const router = require("express").Router();
const finalorderController = require("../controller/finalorderController");

router.post("/", finalorderController.create);
router.get("/", finalorderController.index);

module.exports = router;