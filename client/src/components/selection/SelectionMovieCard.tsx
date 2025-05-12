import type React from "react";
import "../../assets/styles/SelectionMovieCard.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
};

type MovieCardProps = {
  movie: Movie;
};

const getImageUrl = (path: string | null): string => {
  if (!path) return "/api/placeholder/300/450";
  return `https://image.tmdb.org/t/p/w500${path}`;
};

const SelectionMovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="movie-cards">
      <div className="poster-container">
        <img
          src={getImageUrl(poster_path)}
          alt={title}
          className="poster-image"
        />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <button type="button" className="reservation-button">
          Réservez maintenant
        </button>
      </div>
    </div>
  );
};

export default SelectionMovieCard;
