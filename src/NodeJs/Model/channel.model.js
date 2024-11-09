import mongoose from "mongoose";

// A Schema for creating a channel
const channelSchema = new mongoose.Schema({
    channelId: String,
    channelName:String,
    channelBanner: String,
    description: String,
    subscribers: String,
    videos:Array,
});
const channelModel = mongoose.model("channel",channelSchema);
export default channelModel;