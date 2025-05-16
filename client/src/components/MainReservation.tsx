import { useEffect, useState } from "react";
import "../assets/styles/MainReservation.css";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { shoppingCartActions } from "../store/shopping-cart-slice";

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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const clicked = (movie: Movie) => {
    setSelectedId(movie.id);

    dispatch(
      shoppingCartActions.addItemToCart({
        id: movie.id.toString(),
      }),
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // Récupérer les infos du film
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
      .then((res) => res.json())
      .then((data) => {
        // Ensuite, on récupère le casting
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
          .then((res) => res.json())
          .then((castData) => {
            setMovie({ ...data, cast: castData.cast });
          });
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
        <div className="textContainer">
          <img src={apiImage + movie.poster_path} alt={movie.title} />
          <h3 className="h3Movies">{movie.title}</h3>
          <p className="dateRelease">Date de sortie : {movie.release_date}</p>
        </div>
        <div className="container">
          <p className="overviewReservation">{movie.overview}</p>

          <div className="hoursReservation">
            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              14h00
            </button>
            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              15h30
            </button>
            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              17h00
            </button>

            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              18h30
            </button>
            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              20h00
            </button>
            <button
              className={`hoursButton ${selectedId === movie.id ? "active" : ""}`}
              type="button"
              onClick={() => clicked(movie)}
            >
              21h30
            </button>
          </div>
        </div>
        <div className="caddiesReservation">
          <button
            className={`caddiesButton ${selectedId === movie.id ? "active" : ""}`}
            type="button"
            onClick={() => clicked(movie)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
      <div className="distributionContaint">
        <h3 className="tilteDistribution">Distribution :</h3>
        <Swiper
          className="swiperCasting"
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 20 },
            1080: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          <div className="castList">
            {movie.cast.slice(0, 10).map((actor) => (
              <SwiperSlide key={actor.credit_id} className="castItem">
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  className="castImage"
                />
                <p className="castName">{actor.name}</p>
                <p className="castCharacter">as {actor.character}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default MainReservation;
