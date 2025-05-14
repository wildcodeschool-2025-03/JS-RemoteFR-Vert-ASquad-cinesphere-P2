import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

interface movie {
  id: number;
  title: string;
  poster_path: string;
  overwiew: string;
}

function MoviesList() {
  const [movies, setMovies] = useState<movie[]>([]);
  const apiImage = "https://image.tmdb.org/t/p/w200";
  const token = import.meta.env.VITE_TOKEN_API;
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`, // ← CORRECT ici
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
      <h2 className="titleSortiesRecentes"> SORTIES RÉCENTES</h2>
      <Swiper
        className="swiperHome"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 20 },
          1080: { slidesPerView: 4, spaceBetween: 15 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide className="swipperSlideHome" key={movie.id}>
            <img
              src={`${apiImage}${movie.poster_path}`}
              alt={movie.title}
              className="roundedImage"
            />

            <div className="favoriteBlock">
              <h3 className="titleMovies">
                <button
                  className="buttonFavorite"
                  type="button"
                  onClick={toggleLike}
                >
                  {liked ? "❤️" : "🤍"}
                </button>
                <Link className="movieLink" to={`/movie/${movie.id}`}>
                  {movie.title}
                  {movie.overwiew}
                </Link>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MoviesList;
