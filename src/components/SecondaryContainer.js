import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

  const movies=useSelector(store=>store.movies)

  return (
    <div className="bg-black">
      <div className="-mt-64 relative pl-10 z-20">
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayMovies}/>
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Favorite Movies"} movies={movies.nowPlayMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      
      </div>
    </div>
  )
}

export default SecondaryContainer