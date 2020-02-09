import React from "react";
import {
  GiVintageRobot,
  GiVampireDracula,
  GiRobotAntennas,
  GiWhiteCat
} from "react-icons/gi";
import "./choise.css";

export const Choise = ({ handleClick }) => (
  <div className="flex">
    <button className="choise-button" onClick={() => handleClick(1)}>
      <GiVintageRobot size={50} color="#0ccac4" />
    </button>
    <button className="choise-button" onClick={() => handleClick(2)}>
      <GiVampireDracula size={50} color="#0ccac4" />
    </button>
    <button className="choise-button" onClick={() => handleClick(3)}>
      <GiRobotAntennas size={50} color="#0ccac4" />
    </button>
    <button className="choise-button" onClick={() => handleClick(4)}>
      <GiWhiteCat size={50} color="#0ccac4" />
    </button>
  </div>
);
