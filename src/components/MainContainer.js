import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBack from "./VideoBack";

const MainContainer = () => {

    const movies=useSelector(store=>store.movies?.nowPlayMovies);

    if(!movies) return;

    const mainMovie=movies[11];
    

    const {original_title, overview, id}=mainMovie;

  return (
    <div>
    <VideoTitle title={original_title} overview={overview}/>
        <VideoBack movieId={id}/>
    </div>
  )
}

export default MainContainer