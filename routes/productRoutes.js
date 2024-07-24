const router = require("express").Router();
const productController = require("../controller/productController");
const upload = require("../utils/fileUpload");

router.post("/", upload.single("product_image"), productController.create);
router.get("/", productController.index);
router.delete("/:id", productController.trash);
router.put("/:id", upload.single("product_image"), productController.update);

module.exports = router;
