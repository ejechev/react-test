import React from "react";
import { Link } from "react-router-dom";

const Cinema = props => {
  return (
    <div>
      <img src={props.src} alt="" />
      <h1>{props.cinemaName} </h1>
      <Link to="/program"> View Program </Link>
    </div>
  );
};

export default Cinema;
