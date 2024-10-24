import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const showGptSearchView = useSelector(store => store.gpt.showGptsearch)

  return (
    <div>
      <Header />
      {showGptSearchView ? (<GptSearch />) : (<>
        <MainContainer />
        <SecondaryContainer /></>)}
      {
        /* 
        Main container
          -videoBackground
          -videotitle
        secondaryconatiner
          - movielist* n
          -card * n  
        */
      }
    </div>
  )
}

export default Browse
