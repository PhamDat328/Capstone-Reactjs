import axiosClient from "./axiosClient";

const userAPI = {
  userLogin: (user) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", user);
  },
};

export default userAPI