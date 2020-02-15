import React from "react";

const cardStyle = {
  width: "9rem"
};

function Movie(props: any) {
  return (
    <div className="col">
      <div className="card border-0 mb-3" style={cardStyle}>
        <img
          className="card-img-top rounded"
          src={props.movie.image_url}
          alt={props.movie.original_title}
        ></img>
        <div className="card-body p-0">
          <p className="card-text text-center text-truncate font-weight-light">
            {props.movie.original_title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
