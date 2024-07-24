const productModel = require("../model/productModel");

exports.create = async (req, res) => {
  try {
    const {category_id, product_name, product_description, product_price, product_color } =
      req.body;
    const product_image = req?.file?.filename;
   

    const Product = await productModel.create({
      category_id,
      product_name,
      product_description,
      product_price,
      product_color,
      product_image,
    });
    if (Product) {
      res.status(200).json({
        success: true,
        message: "data are inserted",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "data are not inserted",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const Product = await productModel.find().populate('category_id').exec();
    if (Product) {
      res.status(200).json({
        Product,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "no data found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.trash = async (req, res) => {
  try {
    const id = req.params.id;
    const Product = await productModel.findByIdAndDelete({ _id: id });
    if (Product) {
      res.status(200).json({
        success: true,
        message: "data are deleted",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "no id found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const Product = await productModel.findByIdAndUpdate(
      { _id: id },
      {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        product_color: req.body.product_color,
        product_image: req?.file?.filename,
      }
    );
    if (Product) {
      res.status(200).json({
        success: true,
        message: "data is updated successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "id not found ",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
