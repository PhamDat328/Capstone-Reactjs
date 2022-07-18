import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";
import "./Carousel.css";

const Carousel = () => {
  const [isDisplayTrailer, setDisplayTrailer] = useState(false);
  const [bannerId, setBannerId] = useState(0);
  const bannerTrailerRef = useRef();
  const bannerTrailer = [
    "https://www.youtube.com/embed/uqJ9u7GSaYM",
    "https://www.youtube.com/embed/kBY2k3G6LsM",
    "https://www.youtube.com/embed/ZT7rSBbhFGE",
  ];
  const { bannerMovies } = useSelector(
    (state) => state.movieReducer.bannerMovie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  const displayBannerTrailer = (maBanner) => {
    setDisplayTrailer(true);
    setBannerId(maBanner);
    // console.log(bannerTrailerRef.current.style);
  };

  return (
    <div className="carousel">
      {isDisplayTrailer && (
        <div
          className="cover"
          onClick={() => {
            setDisplayTrailer(false);
          }}
        ></div>
      )}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          {bannerMovies.map((bannerMovie) => {
            return (
              <div key={bannerMovie.maBanner} className="carousel-item active">
                <img
                  src={bannerMovie.hinhAnh}
                  className="d-block w-100"
                  style={{ height: "630px" }}
                  alt={bannerMovie.maBanner}
                />
                <div
                  className="playTrailer"
                  onClick={() => {
                    displayBannerTrailer(bannerMovie.maBanner);
                  }}
                >
                  <i className="fa fa-play"></i>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {isDisplayTrailer && (
        <div className="bannerTrailer" ref={bannerTrailerRef}>
          <div
            className="close"
            onClick={() => {
              setDisplayTrailer(false);
            }}
          >
            X
          </div>
          <iframe
            width={885}
            height={498}
            src={`${bannerTrailer[bannerId - 1]}?autoplay=1`}
            title="LẬT MẶT: 48H - Ly Hai Production | Official Trailer | Khởi Chiếu 16.04.2021"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
