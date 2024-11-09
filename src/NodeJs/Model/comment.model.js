import mongoose from "mongoose";
// A scheme for creating comments
const commentSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true
    }
  });
  const commentModel = mongoose.model("Comment",commentSchema)
  export default commentModel;