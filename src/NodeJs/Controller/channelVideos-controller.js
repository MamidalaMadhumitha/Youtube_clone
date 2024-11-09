import channelVideosModel from "../Model/channelVideos.model.js";

export function createChannelVideos(req, res) {
    const {
      videoId,
      title,
      thumbnailUrl,
      channelId,
      views,
      uploadDate} = req.body;
      
    const newChannelVideo = new channelVideosModel({
      videoId,
      title,
      thumbnailUrl,
      channelId,
      views,
      uploadDate
    });
    //   saving the data in the database/server and error handling is applied
    newChannelVideo
      .save()
      .then((data) => {
        if (!data) {
          return res.status(400).send("Something went wrong");
        }
        res.send(data);
      })
      .catch((err) => res.status(500).json({ Message: err.message }));
  }
// fetching all the channel videos from the database
  export function fetchChannelVideos(req,res){
    channelVideosModel.find().then((data) => {
      if(!data){
        return res.status(400).send({message : err.message});
      }
      res.send(data);

    })
    .catch((err) => res.status(500).json({Message: err.message}));
  }

  
  // update one video using put method
  export function updateOneVideo(req,res){
    const _id = req.params.id;
    channelVideosModel.findByIdAndUpdate(_id,req.body).then(data => {
      if(!data){
        return res.status(404).json("No video  found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }
  //delete video from db 
  export function deleteOneVideo(req,res){
    const _id = req.params.id;
    channelVideosModel.findByIdAndDelete(_id).then(data => {
      if(!data){
        return res.status(404).json("No video found");
      }
      res.send(data);
    }).catch(err => res.status(500).json({Message : err.message}))
  }