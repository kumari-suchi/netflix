import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayMovies } from "../utils/moviesSlice";
const useNowPlayMovies=()=>{
    const dispatch=useDispatch();


    const nowPlayMovies=useSelector((store)=>store.movies.nowPlayMovies);

  const getNowPlayMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    
    dispatch(addNowPlayMovies(json.results));
  }

  useEffect(()=>{
    !nowPlayMovies &&  getNowPlayMovies();
  },[]);
}
export default useNowPlayMovies;