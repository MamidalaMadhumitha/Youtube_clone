import commentModel from "../Model/comment.model.js";

export function createComments(req, res) {
    const {userId,text,timestamp} = req.body;
      
    const newComment = new commentModel({
      userId,
      text,
      timestamp,
    });

    //   saving the data in the database/server and erroe handling is applied
    newComment
      .save()
      .then((data) => {
        if (!data) {
          return res.status(400).send("Something went wrong");
        }
        res.send(data);
      })
      .catch((err) => res.status(500).json({ Message: err.message }));
  }
  
  // fetching all the comments from the database
  export function fetchComments(req,res){
    commentModel.find().then((data) => {
      if(!data){
        return res.status(400).send({message : err.message});
      }
      res.status(200).send(data);

    }).catch((err) => res.status(500).send({message: err.message}))
  }