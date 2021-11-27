import mongoose, { Schema } from "mongoose";

const ProfileSchema: Schema = new Schema({
  tiktokID: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model<Profiles>("User", ProfileSchema);
