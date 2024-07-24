const { Schema, model} = require("mongoose");

const schemaFormat = {
    type: String,
    required: true,
    trim: true
}

const categorySchema = Schema({
  
    category_name:{
        ...schemaFormat,
    }
 

},{timestamps:true,}

);

const Category = model("Category",categorySchema);
module.exports = Category;