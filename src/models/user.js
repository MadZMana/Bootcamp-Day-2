import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please input a name"],
  },
  email: {
    type: String,
    required: [true, "Please input an email"],
    unique: true,
    validate: [validator.isEmail, "Please input a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please input a password"],
    minLength: [8, "Password must be at least 8 characters"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;