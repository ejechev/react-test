import React from "react";

const Movie = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.time}</p>
      <p>svobodni mesta {props.mesta}</p>
      <button onClick={props.zapazi} disabled={props.mesta < 1}> Zapazi 1 mqsto </button>
    </div>
  );
};

export default Movie;