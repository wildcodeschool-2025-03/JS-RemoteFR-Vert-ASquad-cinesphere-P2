import { useEffect, useState } from "react";
import MainTopCard from "./MainTopCard";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/MainTopCardList.css";

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
        console.log(data.results); // affiche la liste des films populaires
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="cardBox">
        <h1 className="affiche">FILMS À L'AFFICHE</h1>
        <Swiper
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
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {movies.map((movies) => (
            <SwiperSlide key={movies.id}>
              <MainTopCard
                title={movies.title}
                poster_path={movies.poster_path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainTopCardList;
