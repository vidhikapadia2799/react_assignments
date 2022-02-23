import React from "react";
import "../App.css";
import { Weekday, Month } from "../Constant";

const dateObj = new Date();

const Header = () => {
  return (
    <div className="header">
      <div className="dateStyle">
        <div style={{ fontSize: "36px" }}>{dateObj.getDate()}</div>
        <div style={{ fontSize: "13px" }}>
          <p>&nbsp;{Month[dateObj.getMonth()]}</p>
          <p>&nbsp;{dateObj.getFullYear()}</p>
        </div>
      </div>

      <div>{Weekday[dateObj.getDay()]}</div>
    </div>
  );
};

export default Header;
