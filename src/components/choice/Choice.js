import React from "react";
import {
  GiVintageRobot,
  GiVampireDracula,
  GiRobotAntennas,
  GiWhiteCat
} from "react-icons/gi";
import "./choice.css";

export const Choice = ({ handleClick }) => (
  <div className="flex">
    <button className="choice-button" onClick={() => handleClick(1)}>
      <GiVintageRobot size={50} color="#0ccac4" />
    </button>
    <button className="choice-button" onClick={() => handleClick(2)}>
      <GiVampireDracula size={50} color="#0ccac4" />
    </button>
    <button className="choice-button" onClick={() => handleClick(3)}>
      <GiRobotAntennas size={50} color="#0ccac4" />
    </button>
    <button className="choice-button" onClick={() => handleClick(4)}>
      <GiWhiteCat size={50} color="#0ccac4" />
    </button>
  </div>
);
