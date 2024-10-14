
import { useSelector } from "react-redux";
import useNowPlayMovies from "../hooks/useNowPlayMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendindMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
 
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {showGptSearch? <GptSearch/>:<><MainContainer/>
        <SecondaryContainer/></>}
      
    </div>

  )
}

export default Browse