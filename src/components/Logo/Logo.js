import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import icon_ from "./icon_.png";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 center"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "2px" }} alt="logo" src={icon_} />
        </div>
      </Tilt>
    </div>
  );
}
