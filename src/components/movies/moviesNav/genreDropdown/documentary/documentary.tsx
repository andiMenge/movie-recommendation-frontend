import React from 'react';

function DocumentaryGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="Documentary"
      onClick={props.onFilter}
    >
      Documentary
    </button>
  );
}

export default DocumentaryGenre;
