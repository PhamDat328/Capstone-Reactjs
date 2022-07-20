import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeaderHome = () => {
  return (
    <nav className="p-0 navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid ps-4 pe-4">
        <NavLink className="navbar-brand" to={"/"}>
          <img src="assets/logo.png" alt="Logo" width="50px" height="50px" />
        </NavLink>
        {/* <div className="d-flex align-items-center  ">
          <p>Lịch Chiếu</p>
          <p>Cụm Rạp</p>
          <p>Tin Tức</p>
          <p>Ứng Dụng</p>
        </div> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Cụm Rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Tin Tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Ứng Dụng
              </a>
            </li>
          </ul>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"login"}>
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"register"}>
                Đăng ký
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
