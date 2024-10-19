import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addAdvMovies } from "../utils/moviesSlice";
const useAdvMovies=()=>{
    const dispatch=useDispatch();

    const advantureMovies=useSelector((store)=>store.movies.advantureMovies);
  const getAdvantureMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS);
    const json=await data.json();
    
    dispatch(addAdvMovies(json.results));
  }

  useEffect(()=>{
    !advantureMovies &&  getAdvantureMovies();
  },[]);
}
export default useAdvMovies;