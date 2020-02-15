import React, { useState } from 'react';
import ResetFilterBtn from './resetFilterBtn/resetFilterBtn';
import GenreDropdown from './genreDropdown/genreDropdown';
import Brand from './brand/brand';
import SortDropdown from './sortDropdown/sortDropdown';

function MoviesNav(props: any) {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Brand />
        <GenreDropdown
          filterByGenre={props.filterByGenre}
          setIsFiltered={setIsFiltered}
        />
        <SortDropdown sortMovies={props.sortMovies} />
        {isFiltered ? (
          <ResetFilterBtn
            resetFilter={props.resetFilter}
            setIsFiltered={setIsFiltered}
          />
        ) : (
          ''
        )}
      </nav>
    </div>
  );
}

export default MoviesNav;
