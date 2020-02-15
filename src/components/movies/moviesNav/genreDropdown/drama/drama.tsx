import React from 'react';

function DramaGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Drama"
      onClick={props.onFilter}
    >
      Drama
    </button>
  );
}

export default DramaGenre;
