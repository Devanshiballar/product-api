const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/", userController.create);
router.get("/", userController.index);
router.delete("/:id", userController.trash);
router.put("/:id", userController.update);


module.exports = router;
