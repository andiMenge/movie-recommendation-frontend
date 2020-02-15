import React from 'react';

function FantasyGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Fantasy"
      onClick={props.onFilter}
    >
      Fantasy
    </button>
  );
}

export default FantasyGenre;
