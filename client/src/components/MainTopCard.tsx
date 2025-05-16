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
    <div className="favoriteBlock">
      <Link to={`/movie/${id}`}>
        <img
          className="roundedImage"
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
      </Link>
      <h3 className="titleMovies">
        <button className="buttonFavorite" type="button" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
        <Link to={`/movie/${id}`} className="movieLink">
          {title}
        </Link>
      </h3>
    </div>
  );
}

export default MainTopCard;
