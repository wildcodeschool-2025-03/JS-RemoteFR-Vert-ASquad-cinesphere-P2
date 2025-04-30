import { useEffect, useState } from "react";
import "../assets/styles/MainReservation.css";
import MediaQuery from "react-responsive";

interface movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  collection_id: string;
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
        Authorization: `Bearer ${token}`,
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
            <div className="hoursReservation">
              <button className="hoursButton" type="button">
                14h00
              </button>
              ;
              <button className="hoursButton" type="button">
                15h30
              </button>
              ;
              <button className="hoursButton" type="button">
                17h00
              </button>
              ;
              <MediaQuery minWidth={768}>
                {/* add button for tablet device */}
                <button className="hoursButton" type="button">
                  18h30
                </button>
                ;
                <button className="hoursButton" type="button">
                  20h00
                </button>
                ;
                <button className="hoursButton" type="button">
                  21h30
                </button>
                ;
              </MediaQuery>
            </div>
          </div>
        </>
      ) : (
        "🎬"
      )}

      <div className="caddiesReservation">
        <button className="caddiesButton" type="button">
          {" "}
          Ajouter au panier
        </button>
        ;
      </div>
    </div>
  );
}
export default MainReservation;
