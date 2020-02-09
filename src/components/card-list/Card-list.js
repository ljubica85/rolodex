import React from "react";
import "./card-list.css";
import { Card } from "../card/Card";

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} entity={props.entity} />
    ))}
  </div>
);
