import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoCinema } from "../../Slice/cinema";

const CinemaList = () => {
  const { cinemaInfo } = useSelector((state) => state.cinema);
  console.log(cinemaInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoCinema());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cinema-logo col-sm-2">
            <div className="logo-item">
              <i className="fa fa-film"></i>
            </div>
            <div className="logo-item">
              <i className="fa fa-film"></i>
            </div>
            <div className="logo-item">
              <i className="fa fa-film"></i>
            </div>
          </div>
          <div className="list-cinemas col-sm-4">
            <div className="cinema-item">cinema 1</div>
            <div className="cinema-item">cinema 2</div>
            <div className="cinema-item">cinema 3</div>
          </div>
          <div className="list-films col-sm-6">
            <div className="film-item">film 1</div>
            <div className="film-item">film 2</div>
            <div className="film-item">film 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CinemaList;
