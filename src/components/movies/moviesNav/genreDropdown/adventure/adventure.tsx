import React from 'react';

function AdventureGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Adventure"
      onClick={props.onFilter}
    >
      Adventure
    </button>
  );
}

export default AdventureGenre;
