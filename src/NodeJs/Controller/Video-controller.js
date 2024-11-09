import videoModel from "../Model/Video.model.js";
import { createComments } from "./comment-controller.js";
export function createVideo(req, res) {
  const {
    videoId,title,thumbnailUrl,description,channelId,uploader,views,likes,dislikes,uploadDate,comments=createComments} = req.body;
  const newVideo = new videoModel({
    videoId,
    title,
    thumbnailUrl,
    description,
    channelId,
    uploader,
    views,
    likes,
    dislikes,
    uploadDate,
    comments,
    
  });
  //   saving the data in the database/server and error handling is applied
  newVideo
    .save()
    .then((data) => {
      if (!data) {
        return res.status(400).send("Something went wrong");
      }
      res.send(data);
    })
    .catch((err) => res.status(500).json({ Message: err.message }));
}
export function fetchVideos(req, res) {
  videoModel.find().then((data) => {
    if (!data || data.length === 0) {
      return res.status(400).send({ message: err.message });
    }
    res.status(200).send(data);
  }).catch(err => res.status(500).json({message : err.message}))
}
export function fetchVideo(req,res){
  const _id = req.params.id; 
  videoModel.findById(_id).then(data => {
    if(!data){
      return res.status(400).json({ message:"Invalid" });
    }
    res.status(200).send(data);

  }).catch(err => res.status(500).json({message :err.message}))
}

  // update one video using put method
  export function updateOneVideo(req,res){
    const _id = req.params.id;
    videoModel.findByIdAndUpdate(_id,req.body).then(data => {
      if(!data){
        return res.status(404).json("No video  found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }
  //delete video from db 
  export function deleteOneVideo(req,res){
    const _id = req.params.id;
    videoModel.findByIdAndDelete(_id).then(data => {
      if(!data){
        return res.status(404).json("No video found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }