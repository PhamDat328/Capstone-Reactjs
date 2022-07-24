import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { getMovieShowing } from "../../../Slice/movie";
import MovieFlip from "./MovieFlip";
import './Slick.css'
const MovieItem = () => {
  const { movieShowing } = useSelector((state) => state.movieReducer.movieList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);

  const settings = {
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
  };

  return (
    <div>
      <Slider {...settings}>
        {movieShowing?.map((movie) => {
          return (
            <MovieFlip
              key={movie.maPhim}
              movie={movie}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieItem;
