import { useEffect, useState } from "react";

import "../assets/styles/BannerOffer.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

function BannerOffer() {
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
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="containerBanner">
      <h1 className="title1BanOffer">Un monde de cinéma vous attend !</h1>
      <h2 className="title2BanOffer">
        Plus de 20 films à l'affiche chaque semaine
      </h2>
      <div className="blocImgBanner">
        {movies.slice(0, 3).map((movie) => (
          <div key={movie.id}>
            <img
              className="imgBanner"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>

      <button className="btnSelection" type="button">
        Découvrez notre sélection
      </button>
    </div>
  );
}

export default BannerOffer;
