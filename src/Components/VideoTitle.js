import React from 'react'

const VideoTitle = ({title,overview}) => {
    console.log(title,overview)
  return (
    <div className="pt-36 px-12">
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>
        {overview}
      </p>
      <div className=''>
        <button className='bg-gray-500 text-white p-4 px-10 w-15 text-xl bg-opacity-40 rounded-lg mx-2'> ▶ Play</button>
      <button className='bg-gray-500 text-white p-4 px-10 w-15 text-xl bg-opacity-40 rounded-lg '>MoreInfo</button>
      </div>
    </div>
  )
}

export default VideoTitle
