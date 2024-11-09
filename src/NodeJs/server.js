import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import { userRoutes } from "./Routes/user.routes.js";
import { channelRoutes } from "./Routes/channel-routes.js";
import { channelVideosRoutes} from "./Routes/channelVideos-routes.js";
import { videoRoutes } from "./Routes/video-routes.js";


// importing the express from express framework
const app = express();



//creating a server and connecting to mongod compass
app.listen("3200",async()=>{
    console.log("server is running on port 3200")
    const data = await mongoose.connect("mongodb+srv://mamidalamadhumitha66:Madhumitha@cluster0.1rscn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
   console.log(`Database connected with ${data.connection.host}`);
})

// Express.json for handling JSON data in RESTful APIs 
app.use(express.json());

userRoutes(app);
channelRoutes(app);
channelVideosRoutes(app);
videoRoutes(app);



// created a login for Authenticate user and return a JWT token through login router
app.post("/login",(req,res)=>{
    const user = req.body.username;
 
    const accessToken = jwt.sign(user,"Madhumitha",{});
 
    res.send({token:accessToken});
 });

//  authenicating user 
 function authenticateUser(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split("")[1];
  
    jwt.verify(token,"Madhumitha",(err,user)=>{
      if(err){
        return res.status(403).json({message:"Invalid JWT Token"})
      }
      res.user = user;
      next();
    });
   };