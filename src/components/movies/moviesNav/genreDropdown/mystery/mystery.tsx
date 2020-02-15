import React from 'react';

function MysteryGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Mystery"
      onClick={props.onFilter}
    >
      Mystery
    </button>
  );
}

export default MysteryGenre;
