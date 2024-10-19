import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const VideoTitle = ({movieId,title,overview}) => {
  const navigate = useNavigate()
  
  return (
    <div className='pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
        <div className='my-4 md:m-0'>
        <Link to={`/movie/${movieId}`} >
            <button   className='bg-white text-black py-1 md:py-4 px-3 md:px-14 text-lg md:text-xl rounded-md hover:bg-opacity-80'>➤ Play</button>
        </Link>
            <button className='hidden md:inline-block mx-3 bg-slate-600 text-white p-4 px-14 text-xl rounded-md bg-opacity-50'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle