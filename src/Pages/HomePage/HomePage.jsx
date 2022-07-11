import React from "react";
import Carousel from "./Carousel";
import SelectFilm from "./SelectFilm";
import MovieList from "./MovieList";
import CinemaList from "./CinemaList";
import News from "./News";
import Apps from "./Apps";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
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
