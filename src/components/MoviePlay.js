import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useParams, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const MoviePlay = () => {
  const [key, setKey] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    playMovie();
  }, [id]);

  const playMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();

    const filterData = data.results.filter((v) => {
      return v.type === "Trailer";
    });

    const trailer = filterData?.length ? filterData[0] : data?.results[0];

    if (trailer.key) {
      var { key } = trailer;
    }

    setKey(key);
  };

  const goToHomePage = () => {
    navigate("/browse"); // Navigate to the 'browse' page
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full px-4 sm:px-8 md:px-12 py-2 z-10 flex justify-between items-center bg-gradient-to-b from-black">
        <button
          className="p-2 bg-transparent  rounded transition duration-300 ease-in-out"
          onClick={goToHomePage}
        >
          <img className="w-24 sm:w-36 md:w-44" src={LOGO} alt="logo" />
        </button>
      </div>

      {/* Video Player Section */}
      <div className="flex justify-center items-center h-full w-full">
        {key ? (
          <iframe
            className="w-screen  aspect-video"
            src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MoviePlay;
