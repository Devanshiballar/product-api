const { Schema, model, default: mongoose } = require("mongoose");

const schemaFormat = {
  type: String,
  required: true,
  trim: true,
};

const productSchema = Schema(
  {
    category_id: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    product_name: {
      ...schemaFormat,
    },
    product_description: {
      ...schemaFormat,
    },
    product_price: {
      ...schemaFormat,
    },
    product_color: {
      ...schemaFormat,
    },
    product_image: {
      ...schemaFormat,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
module.exports = Product;
