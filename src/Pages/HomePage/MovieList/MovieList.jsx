import React from "react";
import MovieItem from "../MovieList/MovieItem";
const MovieList = () => {
  return (
    <div id="movieList" className="container mb-5 " style={{ maxWidth: "1280px" , padding:"0 4.85rem"}}>
      <MovieItem />
    </div>
  );
};

export default MovieList;
