import React from 'react';

function MusicGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Music"
      onClick={props.onFilter}
    >
      Music
    </button>
  );
}

export default MusicGenre;
