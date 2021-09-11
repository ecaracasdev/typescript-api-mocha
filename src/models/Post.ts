import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true, lowercase: true },
  content: { type: String, required: true },
  image: { type: String },
},{
  timestamps: true,
  versionKey: false
});

export default model("Post", PostSchema);
