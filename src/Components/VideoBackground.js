import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/933260/videos?language=en-US', API_OPTIONS);
    const jsonData = await data.json();
    console.log('movievideo', jsonData);

    const filterData = jsonData.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    console.log('movievtrailer', trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=EpryNnL_kK9c2Kbk`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground
