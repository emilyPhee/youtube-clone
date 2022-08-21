import React from 'react';
import styles from './video_item.module.css';
import { Link, useLocation } from 'react-router-dom';

const VideoItem = ({ video: { snippet }, video }) => {
  const location = useLocation();

  // if location === '/' ->  home/main page
  // if location === '/details' -> video details page
  const videoItemDisplayStyle =
    location.pathname === '/' ? styles.home : styles.details;

  return (
    <Link
      to="/details"
      className={styles.videoLink}
      state={{ youtubeVideoData: snippet, videoId: video.id }}
    >
      <li className={styles.container}>
        {/* change style based on where to located */}
        <div className={`${styles.video} ${videoItemDisplayStyle}`}>
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
};

export default VideoItem;
