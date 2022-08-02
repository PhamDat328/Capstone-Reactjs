import React from "react";
import "./Account.css";
const Account = () => {
  return (
    <div className="account">
      <div className="container account-container">
        <div className="account-wrap">
          <h1 className="text-dark">Lịch sử đặt vé</h1>
          <div className="line"></div>
          <div className="info">
            <p>Ngày đặt: 01-08-2022</p>
            <p style={{color:"red"}}>Tên phim : ...</p>
            <p>Thời lượng: 120 phút, giá vé: 90000</p>
            <p style={{color:"green"}}>Rạp: CGV</p>
            <p>Rạp 6, Ghế số: 120, 124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
