const UserModel = require("../model/userModel");
const { hashpassword } = require("../utils/hashpassword");


exports.create = async (req, res) => {
  try {
    const { user_name, user_email, user_number, user_password } = req.body;
    const hashpass = await hashpassword(user_password);

    const User = await UserModel.create({
      user_name,
      user_email,
      user_number,
      user_password: hashpass,
    });
    if (User) {
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
    const User = await UserModel.find();
    if (User) {
      res.json({ User });
    } else {
      res.json("no data ");
    }
  } catch (error) {
    console.log(error);
  }
};
exports.trash = async (req, res) => {
  try {
    const id = req.params.id;
    const User = await UserModel.findByIdAndDelete(id);
    if (User) {
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
    const User = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_number: req.body.user_number,
      }
    );
    if (User) {
      res.status(200).json({
        success: true,
        message: "data are inserted",
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
