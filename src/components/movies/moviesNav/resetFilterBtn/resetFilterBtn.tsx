import React from 'react';

function ResetFilterBtn(props: any) {
  function onResetFilter() {
    props.resetFilter();
    props.setIsFiltered(false);
  }
  return (
    <button
      className="btn btn-warning bg mr-1"
      type="button"
      id="resetFilter"
      aria-haspopup="true"
      aria-expanded="false"
      onClick={onResetFilter}
    >
      Reset
    </button>
  );
}

export default ResetFilterBtn;
