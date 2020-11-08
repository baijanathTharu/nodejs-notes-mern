const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    phoneNumber: {
      type: Number,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    dob: Date,
    address: {
      tempAddress: [String],
      permanentAddress: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    role: {
      type: Number, //1 for admin ,2 for normal user 3 visitor
      default: 2,
    },
    status: {
      type: "string",
      enum: ["active", "inactive"],
      default: "active",
    },
    maritalStatus: Boolean,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
