const { Schema, model, default: mongoose } = require("mongoose");

const schemaFormat = {
  type: String,
  required: true,
  trim: true,
};

const UserSchema = Schema(
  {
    user_name: {
      ...schemaFormat,
    },
    user_email: {
      ...schemaFormat,
      unique: true,
    },
    user_number: {
      type: Number,
      unique: true,
    },
    user_password:{
      ...schemaFormat,
    }
  
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
module.exports = User;
