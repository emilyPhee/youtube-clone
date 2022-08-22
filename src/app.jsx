import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetails from './components/video_details/video_details';

import { Route, Routes } from 'react-router-dom';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const handleSearch = useCallback(
    query => {
      youtube
        .search(query) //
        .then(videos => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));
  }, [youtube]);
  return (
    <>
      <SearchHeader onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<VideoList videos={videos} />} />
        <Route path="/details" element={<VideoDetails videoInfo={videos} />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
