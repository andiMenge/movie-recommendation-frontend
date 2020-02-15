import React from 'react';

function WarGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="War"
      onClick={props.onFilter}
    >
      War
    </button>
  );
}

export default WarGenre;
