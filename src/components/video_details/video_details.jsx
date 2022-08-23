import React, { useState } from 'react';
import styles from './video_details.module.css';

import { useLocation } from 'react-router-dom';
import VideoList from '../video_list/video_list';

const VideoDetails = props => {
  const location = useLocation();
  const { youtubeVideoData } = location.state;
  const { videoId } = location.state;

  const [showMore, setShowMore] = useState(false);

  const descriptionText = youtubeVideoData.description;

  return (
    <section className={styles.videoDetailsContainer}>
      <div className={styles.leftSideContainer}>
        <div>
          <iframe
            allowFullScreen
            width="100%"
            height="500px"
            title="Video Player"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          ></iframe>
        </div>
        <h2 className={styles.title}>{youtubeVideoData.title}</h2>
        <h3 className={styles.channelTitle}>{youtubeVideoData.channelTitle}</h3>
        <pre className={styles.description}>
          {showMore ? descriptionText : `${descriptionText.substring(0, 250)}`}
        </pre>
        <button
          className={styles.expandBtn}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : '...more'}
        </button>
      </div>
      <div className={styles.rightSideContainer}>
        {' '}
        <VideoList videos={props.videoInfo} />
      </div>
    </section>
  );
};

export default VideoDetails;
