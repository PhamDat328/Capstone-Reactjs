import axiosClient from "./axiosClient";

const movieAPI = {
  getBannerMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
};

export default movieAPI;
