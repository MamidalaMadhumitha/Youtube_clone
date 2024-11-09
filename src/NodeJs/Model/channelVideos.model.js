import mongoose from "mongoose";
// A creating a schema for channelVideo
const channelVideosSchema = new mongoose.Schema({
      videoId:String,
      title:String,
      thumbnailUrl:String,
      channelId:String,
      views:String,
      uploadDate:String
})
const channelVideosModel = mongoose.model("channelvideos",channelVideosSchema);
export default channelVideosModel;