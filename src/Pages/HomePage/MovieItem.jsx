import React from "react";
import { useSelector } from "react-redux";

const MovieItem = () => {
  const { movieShowing } = useSelector((state) => state.movieReducer.movieList);
  console.log(movieShowing);
  return (
    <div className="row">
      {movieShowing.map((movie) => {
        return (
          <div key={movie.maPhim} className="col-sm-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={movie.hinhAnh} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">
                  {movie.moTa}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;
