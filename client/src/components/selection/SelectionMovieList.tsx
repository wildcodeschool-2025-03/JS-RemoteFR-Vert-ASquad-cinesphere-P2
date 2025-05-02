import { useState, useEffect } from "react";
import type { FC } from "react";
import SelectionMovieCard from "./SelectionMovieCard";
import SelectionGenreFilter from "./SelectionGenreFilter";
import "../../assets/styles/SelectionMovieList.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids: number[];
};

type Genre = {
  id: number;
  name: string;
  selected: boolean;
};

type GenreApiResponse = {
  id: number;
  name: string;
};

const MOVIE_ENDPOINTS = ["now_playing", "popular", "top_rated"];

const SelectionMovieList: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const token = import.meta.env.VITE_TOKEN_API;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=fr-FR",
          options,
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        const genresWithSelected: Genre[] = data.genres.map(
          (genre: GenreApiResponse) => ({
            ...genre,
            selected: false,
          }),
        );

        setGenres(genresWithSelected);
      } catch (err) {}
    };

    fetchGenres();
  }, []);

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
        setFilteredMovies(shuffledMovies);
      } catch (err) {
        setError("Impossible de chargé les films");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const selectedGenreIds = genres
      .filter((genre: Genre) => genre.selected)
      .map((genre: Genre) => genre.id);

    if (selectedGenreIds.length === 0) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie: Movie) =>
        movie.genre_ids.some((id: number) => selectedGenreIds.includes(id)),
      );
      setFilteredMovies(filtered);
    }
  }, [genres, movies]);

  const handleToggleGenre = (id: number) => {
    const updatedGenres = genres.map((genre: Genre) =>
      genre.id === id ? { ...genre, selected: !genre.selected } : genre,
    );
    setGenres(updatedGenres);
  };

  if (loading) {
    return <div className="movies-loading">Chargement des films...</div>;
  }

  if (error) {
    return <div className="movies-error">{error}</div>;
  }

  return (
    <div className="selection-container">
      <button
        type="button"
        className="filter-toggle-button"
        onClick={() => setShowFilters(!showFilters)}
      >
        <span>
          {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
        </span>
      </button>

      <div className="selection-content">
        <div className={`filter-sidebar ${showFilters ? "visible" : ""}`}>
          <SelectionGenreFilter
            genres={genres}
            onToggleGenre={handleToggleGenre}
          />
        </div>

        <div className="movies-container">
          <h2 className="movies-title">NOTRE SELECTION</h2>
          <div className="movies-grid">
            {filteredMovies.map((movie: Movie) => (
              <SelectionMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionMovieList;
