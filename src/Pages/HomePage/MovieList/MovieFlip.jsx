import React from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { setMovieTrailer } from "../../../Slice/movie";

const MovieFlip = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();

  const handleTrailerMovie = (movieTrailer) => {
    // console.log(movieReducer.movieList.actions);
    dispatch(setMovieTrailer(movieTrailer));
  };

  return (
    <div className="flip-card-item">
      <div className="flip-card">
        <div className="flip-card-inner ">
          <div className="flip-card-front">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              //   style={{ width: 300, height: 300 }}
            />
          </div>
          <div className="flip-card-back">
            <img src={movie.hinhAnh} alt={movie.tenPhim} />
            <div className="flip-card-text">
              <h4>{movie.tenPhim}</h4>

              <div>
                <button
                  type="button"
                  className="btnTrailer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleTrailerMovie(movie.trailer)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>

              <p className="movieDescription">{movie.moTa}</p>
            </div>
          </div>
        </div>
      </div>

      <button className="bookTicket">MUA VÉ</button>
    </div>
  );
};

export default MovieFlip;
