import React from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
  return (
    <div className="container">
      {/* {movieShowing.map((movie) => {
        return <p key={movie.maPhim}>{movie.tenPhim}</p>;
      })} */}
      <MovieItem />
    </div>
  );
};

export default MovieList;
