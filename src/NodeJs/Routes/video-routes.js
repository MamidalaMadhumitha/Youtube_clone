import { createVideo, 
    deleteOneVideo, 
    fetchVideo,
     fetchVideos, 
     updateOneVideo } from "../Controller/Video-controller.js";


//created routes for creating videos ,fetching ,deleting and updating
export function videoRoutes(app){
    app.post("/video",createVideo);
    app.get("/videos",fetchVideos);
    app.get("/videos/:id",fetchVideo);
    app.put("/video/:id",updateOneVideo);
    app.delete("/video/:id",deleteOneVideo)
}