import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data =await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

            } catch(error){
                console.log("Error fetching data" , error);
            }
        }

        fetchResults();
    }, [channelId]);

  return (
    <section id='channel'>
        {channelDetail && (
            <div className='channel__inner'>
            <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                <div className='circle'>
                    <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                </div>
            </div>
            <div className="channel__info">
                <h3 className='title'>{channelDetail.snippet.title}</h3>
                <p className='desc'>{channelDetail.snippet.description}</p>
                <div className='info'>
                    <span>{channelDetail.statistics.subscriberCount}</span>
                    <span>{channelDetail.statistics.videoCount}</span>
                    <span>{channelDetail.statistics.viewCount}</span>
                </div>
            </div>
            <div className="channel__video video__inner"></div>
            <div className="channel__more"></div>
        </div>
        )}
    </section>
  )
}

export default Channel