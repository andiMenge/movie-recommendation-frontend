import React from 'react';

function FamilyGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Family"
      onClick={props.onFilter}
    >
      Family
    </button>
  );
}

export default FamilyGenre;
