import "../assets/styles/Evenments.css";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

function Evenements() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const token = import.meta.env.VITE_TOKEN_API;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const clicked = (id: number) => {
    setSelectedId(id);
  };

  return (
    <>
      <div className="">
        <h2>AVANT PREMIERES</h2>
        <div className="movie">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="film-affiche">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Sortie: {movie.release_date}</p>
                <button
                  type="button"
                  className={`film-btn ${selectedId === movie.id ? "active" : ""}`}
                  onClick={() => clicked(movie.id)}
                >
                  20H00
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Evenements;
