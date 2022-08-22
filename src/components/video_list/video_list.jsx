import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = memo(props => {
  return (
    <div className={styles.videosContainer}>
      <ul className={styles.videos}>
        {props.videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
});

export default VideoList;
