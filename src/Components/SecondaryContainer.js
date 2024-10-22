import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies= useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-72 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      

      {/*
      MovieList- Popular
        Moviecard* n
      Movielist- Now Playing
      MovieList- Trending
      MovieList- Horror
       */}
    </div>
  )
}

export default SecondaryContainer
