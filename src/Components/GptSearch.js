import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      GPT Search Bar
      <div className='absolute -z-10'>
                <img src={BG_IMG_URL}
                    alt="bgimage" />
            </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
