import React, { useEffect } from "react";
import Carousel from "./Carousel";
import SelectFilm from "./SelectFilm";
import News from "./News";
import Apps from "./Apps";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";
import MovieList from "./MovieList/MovieList";
import CinemaList from "./Cinema/CinemaList";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  return (
    <div className="app">
      <Carousel />
      <SelectFilm />
      <MovieList />
      <CinemaList />
      <News />
      <Apps />
      <Footer />
    </div>
  );
};

export default HomePage;
