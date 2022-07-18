import axiosClient from "./axiosClient";

const movieAPI = {
  getBannerMovieShowing: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
  getMovieShowingPages: (selectPage) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP03", {
      params: {
        soTrang: selectPage,
        soPhanTuTrenTrang: 8,
      },
    });
  },
};

export default movieAPI;
