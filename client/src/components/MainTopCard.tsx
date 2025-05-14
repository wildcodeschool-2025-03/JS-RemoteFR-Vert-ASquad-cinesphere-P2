import { useState } from "react";
import { Link } from "react-router-dom";

type Film = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

function MainTopCard({ id, title, poster_path }: Film) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        className="roundedImage"
      />
      <h3 className="titleMovies">
        <button className="buttonFavorite" type="button" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
        <Link className="movieLink" to={`/Film/${id}`}>
          {title}
        </Link>
      </h3>
    </div>
  );
}

export default MainTopCard;
