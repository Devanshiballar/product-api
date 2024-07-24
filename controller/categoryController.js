
const categoryModel = require("../model/categoryModel");

exports.create = async (req, res) => {
    try {
      const {category_name} = req.body;
    
  
      const Category= await categoryModel.create({
     
          category_name,
         
      });
      if (Category) {
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
      const Category = await categoryModel.find()
      if (Category) {
          res.json({Category})
        
      } else {
          res.json("no data ")
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  exports.trash = async (req, res) => {
    try {
      const id = req.params.id;
      const Category = await categoryModel.findByIdAndDelete({ _id: id });
      if (Category) {
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
      const Category = await categoryModel.findByIdAndUpdate(
        { _id: id },
        {
          category_name: req.body.category_name,
        }
        
      );
      if (Category) {
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