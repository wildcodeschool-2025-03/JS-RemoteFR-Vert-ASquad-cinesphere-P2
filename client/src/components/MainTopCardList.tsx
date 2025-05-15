import { useEffect, useState } from "react";
import MainTopCard from "./MainTopCard";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/UpComing.css";
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

function MainTopCardList() {
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
      "https://api.themoviedb.org/3/movie/now_playing?language=fr-FR",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="upcomingBloc">
      <h2 className="titleSortiesRecentes"> FILMS À L'AFFICHE</h2>
      <Swiper
        className="swiperHome"
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 4,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide className="swipperSlideHome" key={movie.id}>
            <MainTopCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainTopCardList;
