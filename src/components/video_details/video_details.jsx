import React from 'react';

import { useLocation } from 'react-router-dom';

const VideoDetails = props => {
  const location = useLocation();
  const { youtubeVideoData } = location.state;
  const { videoId } = location.state;

  return (
    <>
      <h1>video details</h1>
      <img src={youtubeVideoData.thumbnails.medium.url} alt="video thumbnail" />
      <h1>{videoId}</h1>
    </>
  );
};

export default VideoDetails;
