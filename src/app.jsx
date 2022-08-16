import React, { useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const handleSearch = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
