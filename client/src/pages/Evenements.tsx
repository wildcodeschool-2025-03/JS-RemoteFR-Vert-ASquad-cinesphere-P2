import HeaderBanner from "../components/HeaderBanner";
import "../styles/Evenments.css";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

function Evenements() {
  const [movies, setMovies] = useState<Movie[]>([]);
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
        console.log(data.results); // affiche la liste des films populaires
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <HeaderBanner />
      <div className="main">
        <h2>AVANT PREMIERES</h2>
        <div className="movie-grid">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <button type="button" className="movie-btn">
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
