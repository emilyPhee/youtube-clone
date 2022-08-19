import React from 'react';
import styles from './video_item.module.css';
import { Link } from 'react-router-dom';

const VideoItem = ({ video: { snippet }, video }) => (
  <Link
    to="/details"
    className={styles.videoLink}
    state={{ youtubeVideoData: snippet, videoId: video.id }}
  >
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  </Link>
);

export default VideoItem;
