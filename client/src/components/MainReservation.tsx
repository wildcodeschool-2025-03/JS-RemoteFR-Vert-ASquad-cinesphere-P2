import { useEffect, useState } from "react";
import "../styles/MainReservation.css";

interface movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

function MainReservation() {
  const [movies, setMovies] = useState<movie[]>([]);
  const apiImage = "https://image.tmdb.org/t/p/w300";
  const token = import.meta.env.VITE_TOKEN_API;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`, // ← CORRECT ici
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);

  return (
    <div className="movieBanner">
      {movies[1] ? (
        <>
          <img
            src={apiImage + movies[1].poster_path}
            alt={movies[1].title}
            className="movieImage"
          />

          <h3 className="h3Movies">{movies[1].title}</h3>

          <div className="container">
            <p className="overviewReservation">{movies[1].overview}</p>
          </div>
        </>
      ) : (
        "🎬"
      )}
    </div>
  );
}
export default MainReservation;
