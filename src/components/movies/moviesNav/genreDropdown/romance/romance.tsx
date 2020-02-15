import React from 'react';

function RomanceGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Romance"
      onClick={props.onFilter}
    >
      Romance
    </button>
  );
}

export default RomanceGenre;
