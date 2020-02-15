import React from 'react';

function TvMovieGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="TV Movie"
      onClick={props.onFilter}
    >
      TV Movie
    </button>
  );
}

export default TvMovieGenre;
