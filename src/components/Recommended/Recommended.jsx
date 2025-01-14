import React, { useState } from 'react'
import './Recommended.css'
import { API_KEY,value_convertor } from '../../Data'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'


function Recommended({categoryId}){

    const[apiData,setApiData]=useState([]);
    // Fetching the data for related videos from api
    const fetchData = async()=>{
        const relatedVideo_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res=>res.json().then(data=>setApiData(data.items)));
    }

    useEffect(()=>{
     fetchData();
    },[]);

    return(
        <>
        <div className='recommended'>
            {apiData.map((item,index)=>{
               return(
                  // video Description
                    <Link to ={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                           <img src={item.snippet.thumbnails.medium.url} height="100px" width="100px" />
                           <div className="vid-info">
                               <h4>{item.snippet.title}</h4>
                               <p>{item.snippet.channelTitle}</p>
                               <p>{value_convertor(item.statistics.viewCount)} Views</p>
                           </div>
                    </Link>                       
                  
               ) 
            })}          
        </div>     
        </>
    )
}
export default Recommended;