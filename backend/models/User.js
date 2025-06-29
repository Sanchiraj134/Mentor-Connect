import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["mentor", "mentee"], required: true },
  skills: [String],
  interests: [String],
  bio: String,
  availableSlots: [String],
});

export default mongoose.model("User", UserSchema);