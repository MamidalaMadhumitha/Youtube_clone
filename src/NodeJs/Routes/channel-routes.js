import { createChannel, fetchChannel } from "../Controller/channel-controller.js"

//Created routes for channel creation
export function channelRoutes(app) {
    app.post("/channel",createChannel)
    app.get("/channel",fetchChannel)
}