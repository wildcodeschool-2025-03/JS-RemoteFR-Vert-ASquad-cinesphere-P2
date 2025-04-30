import { useState, useEffect } from "react";
import type { FC } from "react";
import SelectionMovieCard from "./SelectionMovieCard";
import "../../assets/styles/SelectionMovieList.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids: number[];
};

const MOVIE_ENDPOINTS = ["now_playing", "popular", "top_rated"];

const SelectionMovieList: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = import.meta.env.VITE_TOKEN_API;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const requests = MOVIE_ENDPOINTS.map((endpoint) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${endpoint}?language=fr-FR&page=1`,
            options,
          ).then((res) => {
            if (!res.ok) {
              throw new Error(`Erreur HTTP: ${res.status}`);
            }
            return res.json();
          }),
        );

        const results = await Promise.all(requests);

        const allMovies: Movie[] = results.flatMap((data) => data.results);

        const uniqueMoviesMap = new Map<number, Movie>();

        for (const movie of allMovies) {
          if (!uniqueMoviesMap.has(movie.id)) {
            uniqueMoviesMap.set(movie.id, movie);
          }
        }

        const uniqueMovies = Array.from(uniqueMoviesMap.values());
        const shuffledMovies = uniqueMovies.sort(() => Math.random() - 0.5);

        setMovies(shuffledMovies);
      } catch (err) {
        setError("Impossible de charger les films");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="movies-loading">Chargement des films...</div>;
  }

  if (error) {
    return <div className="movies-error">{error}</div>;
  }

  return (
    <div className="selection-container">
      <div className="movies-container">
        <h2 className="movies-title">NOTRE SELECTION</h2>
        <div className="movies-grid">
          {movies.map((movie: Movie) => (
            <SelectionMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionMovieList;
