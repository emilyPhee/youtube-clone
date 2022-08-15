import React, { useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = searchInput => {
    setQuery(searchInput);
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const mostPopularAPI =
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=';

    const searchResultAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=`;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      (query === '' ? mostPopularAPI : searchResultAPI) + apiKey,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [query]);
  return (
    <>
      <SearchHeader handleSearch={handleSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
