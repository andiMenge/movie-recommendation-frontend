import React from 'react';

function ScienceFictionGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Science Fiction"
      onClick={props.onFilter}
    >
      Science Fiction
    </button>
  );
}

export default ScienceFictionGenre;
