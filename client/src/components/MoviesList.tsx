import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface movie {
  id: number;
  title: string;
  poster_path: string;
}

function MoviesList() {
  const [movies, setMovies] = useState<movie[]>([]);
  const apiImage = "https://image.tmdb.org/t/p/w200";
  const token = import.meta.env.VITE_TOKEN_API;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("https://api.themoviedb.org/3/movie/top_rated", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="upcomingBloc">
      <h2> Sorties Récentes </h2>{" "}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 20 },
          1080: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`${apiImage}${movie.poster_path}`}
              alt={movie.title}
              className="roundedImage"
            />
            <div className="favoriteBlock">
              {" "}
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
