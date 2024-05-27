//imports the db and makes a todo model
import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  text: { type: String, unique: true },
  completed: Boolean,
});

export const Todo = mongoose.model("Todo", todoSchema);
