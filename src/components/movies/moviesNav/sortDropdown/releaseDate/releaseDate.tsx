import React from 'react';

function ReleaseDate(props: any) {
  function onSort() {
    props.sortMovies('releaseDate');
  }

  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="releaseDate"
      onClick={onSort}
    >
      Release Date
    </button>
  );
}

export default ReleaseDate;
