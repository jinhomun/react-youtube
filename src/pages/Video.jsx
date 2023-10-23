import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);


    useEffect (() => {
        fetchFromAPI(`videos?part=snippet,statistic&id=${videoId}`)
          .then((data) => setVideoDetail(data.items[0]));
    }, [videoId]);

    return (
      <section id='videoViewPage'>
        {videoDetail && (
          <div className='video__view'>
              <div className="video__play">
                <ReactPlayer 
                  playing={true}
                  url={`https://www.youtube.com/watch?v=${videoId}`}
                  width = '100%'
                  height = '50%'
                  style = {{position: 'absolute', top: 0, left:0}} 
                />
              </div>
          </div>
        )}
      </section>
      
    )
}

export default Video