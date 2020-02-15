import React from 'react';

function CrimeGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Crime"
      onClick={props.onFilter}
    >
      Crime
    </button>
  );
}

export default CrimeGenre;
