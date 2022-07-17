import axiosClient from "./axiosClient";

const movieAPI = {
  getBannerMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
  getMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
  }
};

export default movieAPI;
