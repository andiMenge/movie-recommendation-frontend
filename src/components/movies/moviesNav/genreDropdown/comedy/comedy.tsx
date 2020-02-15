import React from 'react';

function ComedyGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Comedy"
      onClick={props.onFilter}
    >
      Comedy
    </button>
  );
}

export default ComedyGenre;
