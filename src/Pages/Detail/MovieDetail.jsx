import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieShowingDetail } from "../../Slice/movie";
import Button from "react-bootstrap/Button";

import "./MovieDetail.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const MovieDetail = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { movieId } = useParams();
  const { movieDetail } = useSelector(
    (state) => state.movieReducer.movieDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieShowingDetail(movieId));
  }, []);

  return (
    <div className="movieDetail">
      <div className="container movie-container">
        <div className="row">
          <div className="col-1 movie-image">
            <img src={movieDetail.hinhAnh} alt="" />
            <Button className="btnTrailer" onClick={() => setModalShow(true)}>
              <i className="fa fa-play"></i>
            </Button>
            <MyVerticallyCenteredModal
              movietrailer={movieDetail.trailer}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="col-2">
            <div className="text-info-movie">
              <h2>{movieDetail.tenPhim}</h2>
              <p>120 phút</p>
              <a href="#">
                <span>Mua vé</span>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="rated">
              <h2>10</h2>
              <div className="start">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
