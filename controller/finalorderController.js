const finalorderModel = require("../model/finalorderModel");

exports.create = async (req, res) => {
  try {
    const { product_id, user_id } = req.body;

    const Order = await finalorderModel.create({
      product_id,
      user_id,
    });
    if (Order) {
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
    const Order = await finalorderModel
      .findById({},{__v:0})
      .populate({
        path: "product_id",
        populate: {
          path: "category_id",
        },
      })
      .populate({
        path:"user_id",
        select:"-__v -_id "
      })
      .exec();
    if (Order) {
      res.status(200).json({
        Order,
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
