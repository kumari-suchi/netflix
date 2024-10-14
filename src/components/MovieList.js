import MovieCard from "./MovieCard";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // v2 import

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="px-4 py-2 text-white">
      <h1 className="text-3xl py-4 font-bold">{title}</h1>
      <div className="relative group">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full hidden group-hover:block"
          onClick={() => scroll("left")}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        {/* Movies container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth p-2 space-x"
        >
          {movies?.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full hidden group-hover:block"
          onClick={() => scroll("right")}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
