import { useState } from "react";

type Film = {
  title: string;
  poster_path: string;
};

function MainTopCard({ title, poster_path }: Film) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="movieCard">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <h1>
        <button type="button" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
        {title}
      </h1>
    </div>
  );
}

export default MainTopCard;
