import { useEffect, useState } from "react";
import "../assets/styles/MainReservation.css";
import { useParams } from "react-router";

interface Credit {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  collection_id: string;
  backdrop_path: string;
  release_date: string;
  cast: Credit[];
}

function MainReservation() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const apiImage = "https://image.tmdb.org/t/p/w300";
  const token = import.meta.env.VITE_TOKEN_API;
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>"Chargement ....🎬"</p>;

  return (
    <div className="movieBanner">
      <img
        className="backGroundBloc"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        alt=""
      />
      <div className="moviesContent">
        <img src={apiImage + movie.poster_path} alt={movie.title} />

        <h3 className="h3Movies">{movie.title}</h3>
        <p className="dateRelease">Date de sortie {movie.release_date}</p>
        <div className="container">
          <p className="overviewReservation">{movie.overview}</p>

          <div className="hoursReservation">
            <button className="hoursButton" type="button">
              14h00
            </button>
            <button className="hoursButton" type="button">
              15h30
            </button>
            <button className="hoursButton" type="button">
              17h00
            </button>

            <button className="hoursButtonMedia" type="button">
              18h30
            </button>
            <button className="hoursButtonMedia" type="button">
              20h00
            </button>
            <button className="hoursButtonMedia" type="button">
              21h30
            </button>
          </div>
        </div>
      </div>

      <div className="caddiesReservation">
        <button className="caddiesButton" type="button">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default MainReservation;
