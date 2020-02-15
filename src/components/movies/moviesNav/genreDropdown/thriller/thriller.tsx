import React from 'react';

function ThrillerGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Thriller"
      onClick={props.onFilter}
    >
      Thriller
    </button>
  );
}

export default ThrillerGenre;
