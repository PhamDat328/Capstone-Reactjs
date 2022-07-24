import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaList,
  getCinemaListInfo,
  getMovieScheduleByCinema,
} from "../../../Slice/cinema";
import "./cinemaList.css";

const CinemaList = () => {
  // useSelector, get date from store
  const { cinemaList } = useSelector((state) => state.cinemaReducer.cinemaList);
  const { cinemaListInfo } = useSelector(
    (state) => state.cinemaReducer.cinemaListInfo
  );
  const { movieSchedule } = useSelector(
    (state) => state.cinemaReducer.movieSchedule
  );
  // console.log(cinemaList[0].maHeThongRap);

  // ---------------------------------------------------------------------

  const [cinemaName, setCinemaName] = useState("BHDStar");
  const [cinemaCluster, setCinemaCluster] = useState(
    "bhd-star-cineplex-bitexco"
  );
  // console.log(cinemaName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaList());
  }, []);
  useEffect(() => {
    dispatch(getMovieScheduleByCinema());
  }, [cinemaCluster]);

  useEffect(() => {
    dispatch(getCinemaListInfo(cinemaName));
  }, [cinemaName]);
  // console.log(movieSchedule[0].lstCumRap[0].danhSachPhim[0].hinhAnh);

  const handleClickCinemaLogo = (cinemaID) => {
    setCinemaName(cinemaID);
  };
  const handleClickCinemaCluster = (cinemaClusterID) => {
    setCinemaCluster(cinemaClusterID);
  };
  // console.log(cinemaCluster);

  return (
    <>
      <div className="cinema-container">
        <div className="row">
          <div className="cinema-logo col-sm-2">
            {cinemaList.map((item) => {
              return (
                <div
                  onClick={() => {
                    handleClickCinemaLogo(item.maHeThongRap);
                  }}
                  className="logo-item"
                  key={item.biDanh}
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={item.logo} alt={item.maHeThongRap} />
                </div>
              );
            })}
          </div>
          <div className="list-cinemas col-sm-4">
            {cinemaListInfo.map((item) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  className="cinema-item"
                  key={item.maCumRap}
                  onClick={() => {
                    handleClickCinemaCluster(item.maCumRap);
                  }}
                >
                  <div className="cinema-name">{item.tenCumRap}</div>
                  <div className="address">{item.diaChi}</div>
                </div>
              );
            })}
          </div>
          <div className="list-films col-sm-6">
            {movieSchedule.map((item) => {
              return item.lstCumRap.map((lstCumRapItem) => {
                if (lstCumRapItem.maCumRap === cinemaCluster) {
                  return lstCumRapItem.danhSachPhim.map((danhSachPhimItem) => {
                    return (
                      <div className="film-item" key={danhSachPhimItem.maPhim}>
                        <p className="movie-name">{danhSachPhimItem.tenPhim}</p>
                        <div className="movie-img">
                          <img src={danhSachPhimItem.hinhAnh} alt="" />
                        </div>
                        {danhSachPhimItem.lstLichChieuTheoPhim.map(
                          (LichChieuTheoPhimItem, index) => {
                            const dateTime =
                              LichChieuTheoPhimItem.ngayChieuGioChieu.split(
                                "T"
                              );
                            if (index < 4) {
                              return (
                                <div
                                  className="dateTime"
                                  key={LichChieuTheoPhimItem.maLichChieu}
                                >
                                  <div className="date">{dateTime[0]}</div>
                                  <div className="time">{dateTime[1]}</div>
                                </div>
                              );
                            }
                          }
                        )}
                      </div>
                    );
                  });
                }
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CinemaList;
