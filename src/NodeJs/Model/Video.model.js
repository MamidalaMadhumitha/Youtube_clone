import mongoose from "mongoose";

//A schema for creating a video
const videoSchema = new mongoose.Schema({
  videoId:Number,
  title: String,
  thumbnailUrl: String,
  description: String,
  channelId: String,
  uploader: String,
  views: String,
  likes: String,
  dislikes: String,
  uploadDate: String,
  comments:Array,
});
const videoModel = mongoose.model("videos",videoSchema);
export default videoModel;