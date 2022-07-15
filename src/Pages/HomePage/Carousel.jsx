import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";
import "./Carousel.css";

const Carousel = () => {
  const bannerTrailer = [
    "https://www.youtube.com/embed/kBY2k3G6LsM",
    "https://www.youtube.com/embed/ZT7rSBbhFGE",
    "https://www.youtube.com/embed/uqJ9u7GSaYM",
  ];
  const { bannerMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  // console.log(bannerMovies);

  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  const displayBannerTrailer = (maBanner) => {
    console.log(maBanner);
  };

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        // data-bs-interval="false"
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
    </div>
  );
};

export default Carousel;
