import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

/* détermination des types */
interface movie {
  id: number;
  title: string;
  poster_path: string;
}

function MoviesList() {
  const [movies, setMovies] = useState<movie[]>([]);

  /* Importation de l'API cinéma */
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGFhOWQ2MmM4ZjQyZTY4ODI1MzAyZTNhNTc4ZjZmNCIsIm5iZiI6MTc0NTI0ODQ0NC40ODE5OTk5LCJzdWIiOiI2ODA2NjBiYzNmODg4NTRjNDllZTY4NjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CK_Ym5rHM4kuUSLLxFvIIU9PItGULGJQC0vHWSY24Uw",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/upcoming?language=fr-FR", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="upcomingBloc">
      {/* Bloc des film à venir */}
      <h2> Sorties Récentes </h2>{" "}
      <Swiper /* Caroussel */
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          768: { slidesPerView: 3, spaceBetween: 20 },
          1080: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img /* Images du caroussel */
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="roundedImage"
            />
            <div className="favoriteBlock">
              {" "}
              {/* Bloc du bouton "ajouter aux favoris" */}
              <h3>
                <button type="button" className=" buttonFavorite">
                  ★
                </button>
                {movie.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MoviesList;
