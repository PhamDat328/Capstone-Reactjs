import axiosClient from "./axiosClient";

const cinemaAPI = {
  getInfoCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
};

export default cinemaAPI;
