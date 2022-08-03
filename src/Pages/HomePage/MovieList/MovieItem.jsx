import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { getMovieShowing } from "../../../Slice/movie";
import MovieFlip from "./MovieFlip";
import "./Slick.css";
const MovieItem = () => {
  const { movieShowing } = useSelector((state) => state.movieReducer.movieList);

  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);
  let settings = {};
  {
    windowSize > 1024
      ? (settings = {
          className: "center",
          // centerMode: true,
          dots: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 4,
          speed: 500,
          rows: 2,
          slidesPerRow: 1,
          slidesToScroll: 4,
        })
      : windowSize > 576 && windowSize <= 1024
      ? (settings = {
          className: "center",
          // centerMode: true,
          dots: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 3,
          speed: 500,
          rows: 3,
          slidesPerRow: 1,
          slidesToScroll: 4,
          width: "80%",
        })
      : (settings = {
          className: "center",
          // centerMode: true,
          dots: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 1,
          speed: 500,
          rows: 4,
          slidesPerRow: 1,
          slidesToScroll: 4,
          width: "80%",
        });
  }

  return (
    <div>
      <Slider {...settings}>
        {movieShowing?.map((movie) => {
          return <MovieFlip key={movie.maPhim} movie={movie} />;
        })}
      </Slider>
    </div>
  );
};

export default MovieItem;
