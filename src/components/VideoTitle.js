import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-64 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-14 text-xl rounded-md hover:bg-opacity-80'>➤ Play</button>
            <button className='mx-3 bg-slate-600 text-white p-4 px-14 text-xl rounded-md bg-opacity-50'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle