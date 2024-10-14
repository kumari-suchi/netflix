import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSug from './GptMovieSug'
import { BACK_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img src={BACK_URL}
        alt="logo"/>
        </div>
        <GptSearchBar/>
        <GptMovieSug/>
    </div>
  )
}

export default GptSearch