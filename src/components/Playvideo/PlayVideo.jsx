import React, { useState, useEffect } from "react"
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import tom from '../../assets/tom.png'
import { API_KEY, value_convertor } from "../../Data"
import moment from "moment"
import { useParams } from "react-router-dom"

function PlayVideo() {

  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState([]);
  const [commentData, setcommentData] = useState([]);

  const fetchVideoData = async () => {
    //fetching the video url
    const videoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
  }


  const fetchchannelData = async () => {
    //fetching the channel url
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelID}&key=${API_KEY}`;
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]));


  }

  const fetchcommentData = async () => {
    //fetching the comment url
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then(res => res.json().then(data => setcommentData(data.items)));
  }


  useEffect(() => {
    fetchVideoData();
  }, [videoId]);


  useEffect(() => {
    fetchchannelData();
  }, [apiData]);

  useEffect(() => {
    fetchcommentData();
  }, []);

  return (
    <>
      <div className="play-video">
        {/* using   iframe for loading the data from api for playing video*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {/* Nesting the data from api to get the title of the video */}
        <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      </div>
      {/* video description */}
      <div className="play-video-info">
        <p> {apiData ? value_convertor(apiData.statistics.viewCount) : "15K"}Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} />{apiData ? value_convertor(apiData.statistics.likeCount) : 145}</span>
          <span><img src={dislike} />5</span>
          <span><img src={share} />share</span>
          <span><img src={save} />save</span>
        </div>
      </div>
      {/* Channel author */}
      <div className="publisher">

        <img src={tom} />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span> 1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      {/* comments  */}
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 240) : "Description"}</p>
        <hr />
        <h4>{apiData ? value_convertor(apiData.statistics.commentCount) : 120} Comments</h4>
        <div>
          {commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}
                  </p>
                  <div className="comment-action">
                    <img src={like} />
                    <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                    <img src={dislike} />
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </>
  )
}
export default PlayVideo;
