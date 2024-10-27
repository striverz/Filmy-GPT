import { useSelector } from "react-redux";
import VideoPlay from "../VideoPlay/VideoPlay";
import VideoInfo from "../VideoInfo/VideoInfo";
import "./TrailerContainer.css"

const TrailerContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Check if movies is not defined or if it's an empty array
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[1];

  // Check if mainMovie is defined before destructuring
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="trailer-container">
      <VideoInfo title={original_title} overview={overview} />
      <VideoPlay movieId={id} />
    </div>
  );
};

export default TrailerContainer;
