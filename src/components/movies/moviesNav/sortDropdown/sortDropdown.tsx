import React from 'react';
import AddedDate from './addedDate/addedDate';
import ReleaseDate from './releaseDate/releaseDate';

function SortDropdown(props: any) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg mr-1"
        type="button"
        id="sortDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort
      </button>
      <div className="dropdown-menu" aria-labelledby="sortDropdown">
        <AddedDate sortMovies={props.sortMovies} />
        <ReleaseDate sortMovies={props.sortMovies} />
      </div>
    </div>
  );
}

export default SortDropdown;
