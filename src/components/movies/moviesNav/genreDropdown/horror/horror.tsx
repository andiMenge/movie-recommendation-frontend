import React from 'react';

function HorrorGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Horror"
      onClick={props.onFilter}
    >
      Horror
    </button>
  );
}

export default HorrorGenre;
