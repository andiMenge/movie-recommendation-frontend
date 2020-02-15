import React from 'react';

function HistoryGenre(props: any) {
  return (
    <button
      className="dropdown-item btn-sm"
      type="button"
      id="History"
      onClick={props.onFilter}
    >
      History
    </button>
  );
}

export default HistoryGenre;
