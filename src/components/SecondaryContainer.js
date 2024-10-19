import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="flex flex-col bg-black pb-6">
      <div className="relative  pl-4 sm:pl-8 md:pl-10 z-20 -mt-0 sm:-mt-48 md:-mt-64">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Favorite Movies"} movies={movies.nowPlayMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        {/*<MovieList title={"Advanture Movies"} movies={movies.advantureMovies} />*/}
      </div>
    </div>
  );
};

export default SecondaryContainer;
