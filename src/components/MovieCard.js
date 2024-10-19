import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
    if(!posterPath){
        return null
      }
  return (
    <div className='cursor-pointer rounded-md shadow-md shadow-gray-600'>{/*className='w-48 pr-6'*/ }
        <img className=' rounded-md' alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard