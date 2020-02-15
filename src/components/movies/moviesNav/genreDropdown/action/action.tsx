import React from 'react';

function ActionGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Action"
      onClick={props.onFilter}
    >
      Action
    </button>
  );
}

export default ActionGenre;
