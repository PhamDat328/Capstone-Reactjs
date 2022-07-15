import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannerMovieShowing } from "../../Slice/movie";

const Carousel = () => {
  const { bannerMovie } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBannerMovieShowing());
  });

  return <div>Carousel</div>;
};

export default Carousel;
