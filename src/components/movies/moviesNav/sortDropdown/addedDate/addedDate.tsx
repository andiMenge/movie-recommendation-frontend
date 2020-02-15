import React from 'react';

function AddedDate(props: any) {
  function onSort() {
    props.sortMovies('addedDate');
  }

  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="AddedDate"
      onClick={onSort}
    >
      Added Date
    </button>
  );
}

export default AddedDate;
