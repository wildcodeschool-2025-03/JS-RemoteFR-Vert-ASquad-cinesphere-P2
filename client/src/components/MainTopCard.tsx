import { useState } from "react";
import { Link } from "react-router-dom";

type Film = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

function MainTopCard({ title, poster_path, id }: Film) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="movieCard">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <h1 className="titleMovie">
        <button className="movieBtn" type="button" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
        <Link to={`/movie/${id}`} className="movieLink">
          {title}
        </Link>
      </h1>
    </div>
  );
}

export default MainTopCard;
