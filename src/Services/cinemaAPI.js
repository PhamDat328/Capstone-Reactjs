import axiosClient from "./axiosClient";

const cinemaAPI = {
  getCinemaList: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
  getCinemaListInfo: (cinemaName) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: cinemaName,
      },
    });
  },
  getMovieScheduleByCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP03",
      },
    });
  },
};

export default cinemaAPI;
