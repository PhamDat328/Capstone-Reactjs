import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";

const Carousel = () => {
  const { bannerMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerMovieShowing());
  }, []);

  return (
    <div>
      {bannerMovies.map((bannerMovie) => {
        return (
          <div key={bannerMovie.maBanner}>
            <img
              src={bannerMovie.hinhAnh}
              alt="#"
              height="200px"
              weight="200px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
