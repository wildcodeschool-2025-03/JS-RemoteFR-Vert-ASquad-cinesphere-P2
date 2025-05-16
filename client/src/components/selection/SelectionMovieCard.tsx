import { Calendar } from "lucide-react";
import type React from "react";
import "../../assets/styles/SelectionMovieCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { shoppingCartActions } from "../../store/shopping-cart-slice";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
};

type SelectionMovieCardProps = {
  movie: Movie;
};

const getImageUrl = (path: string | null): string => {
  if (!path) return "/api/placeholder/300/450";
  return `https://image.tmdb.org/t/p/w500${path}`;
};

const SelectionMovieCard: React.FC<SelectionMovieCardProps> = ({ movie }) => {
  const { title, poster_path, overview, release_date } = movie;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const formattedDate = new Date(release_date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const clicked = (movie: Movie) => {
    setSelectedId(movie.id);

    dispatch(
      shoppingCartActions.addItemToCart({
        id: movie.id.toString(),
      }),
    );
  };

  const dispatch = useDispatch();

  return (
    <div className="movie-cards">
      <div className="poster-container">
        <img
          src={getImageUrl(poster_path)}
          alt={title}
          className="poster-image"
        />
        <div className="movie-content">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-overview">{overview}</p>
          <div className="release-date">
            <Calendar className="icon" />
            <span className="date-text">{formattedDate}</span>
          </div>
          <button
            type="button"
            className={`reservation-button ${selectedId === movie.id ? "active" : ""}`}
            onClick={() => clicked(movie)}
          >
            Réservez
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionMovieCard;
