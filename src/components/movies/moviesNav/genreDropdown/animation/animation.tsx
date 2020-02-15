import React from 'react';

function AnimationGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Animation"
      onClick={props.onFilter}
    >
      Animation
    </button>
  );
}

export default AnimationGenre;
