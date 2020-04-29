import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.img.src} alt={movie.img.alt} width="200" />

      <div className="card-body">
        <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Distributor: ${movie.distributor}`}</li>
        <li className="list-group-item">{`Amount : ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

export default Card;
