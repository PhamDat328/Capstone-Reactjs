import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieShowingDetail } from "../../Slice/movie";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

import "./MovieDetail.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { getMovieDetailSchedule } from "../../Slice/cinema";

const MovieDetail = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cineplex, setCineplex] = useState([]);
  const { movieId } = useParams();
  const { movieDetail } = useSelector(
    (state) => state.movieReducer.movieDetail
  );
  const { movieDetailSchedule } = useSelector(
    (state) => state.cinemaReducer.movieDetailSchedule
  );

  const cinemaList = movieDetailSchedule.heThongRapChieu;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieShowingDetail(movieId));
    dispatch(getMovieDetailSchedule(movieId));
  }, []);

  const handleTheater = (arrTheater) => {
    setCineplex(arrTheater);
  };

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
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" cinema">
        <div className="row">
          <div className="col-1">
            <div className="cinema-list">
              {cinemaList?.map((cinema) => {
                return (
                  <div key={cinema.maHeThongRap} className="cinema-list-detail">
                    <button
                      className="cinema-img"
                      onClick={() => handleTheater(cinema.cumRapChieu)}
                    >
                      <img src={cinema.logo} alt="" />
                      <p>{cinema.tenHeThongRap}</p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-2">
            {cineplex?.map((theater) => (
              <div
                key={theater.maCumRap}
                className="border-bottom theater-list"
              >
                <div className="theater-item">
                  <img src={theater.hinhAnh} alt="" />
                  <div className="theater-info">
                    <p>{theater.tenCumRap}</p>
                    <span>{theater.diaChi}</span>
                  </div>
                </div>
                <div className="showtimes">
                  {theater.lichChieuPhim.map((showtimes) => (
                    <button key={showtimes.maLichChieu} className="showtimeBtn">
                      <p>
                        {dayjs(showtimes.ngayChieuGioChieu).format(
                          "DD-MM-YYYY "
                        )}
                      </p>
                      <h6>-</h6>
                      <span>
                        {dayjs(showtimes.ngayChieuGioChieu).format("HH:mm")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
