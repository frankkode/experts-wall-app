import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number,required: false },
  photo: { type: String },
  role: {
    type: String,
    enum: ["client", "admin"],
    default: "client",
  },
  category: { type: String, enum: ["individual", "company", "other"] },
  mycase: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("User", UserSchema);
