const router = require("express").Router();
const categoryController = require("../controller/categoryController");

router.post("/", categoryController.create);
router.get("/", categoryController.index);
router.delete("/:id", categoryController.trash);
router.put("/:id", categoryController.update);

module.exports = router;