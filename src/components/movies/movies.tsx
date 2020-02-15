import React, { useState, useEffect, useRef } from 'react';
import { IMovie, IMovieResponse } from './movies.interface';
import { MovieList } from './movieList/movieList';
import MoviesNav from './moviesNav/moviesNav';
import {
  isGenreInMovie,
  sortByAddedDate,
  sortByReleaseDate
} from './moviesUtils';

function Movies() {
  // init state is empty thats why the type is so wierd
  const [movies, setMovies] = useState<IMovie[] | []>([]);
  const unfilteredMovies = useRef<IMovie[]>([]);

  useEffect(() => {
    async function getMovies() {
      const resp = await fetch('https://movies.andimenge.de/api/movies');
      const json: IMovieResponse = await resp.json();
      unfilteredMovies.current = json.movies;
      setMovies(json.movies);
    }
    getMovies();
  }, []);

  const resetFilter = () => {
    setMovies(unfilteredMovies.current);
  };

  const filterByGenre = (genreName: string) => {
    const filteredMovies: IMovie[] = movies.filter(movie =>
      isGenreInMovie(movie, genreName)
    );
    if (filteredMovies.length > 0) {
      setMovies(filteredMovies);
    } else {
      console.log('no movies found with genre:', genreName);
    }
  };

  const sortMovies = (type: string) => {
    const moviesCopy = movies.concat();

    if (type === 'addedDate') {
      setMovies(sortByAddedDate(moviesCopy));
    }
    if (type === 'releaseDate') {
      setMovies(sortByReleaseDate(moviesCopy));
    }
  };

  return (
    <div className="container-flex mx-2">
      <MoviesNav
        filterByGenre={filterByGenre}
        resetFilter={resetFilter}
        sortMovies={sortMovies}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default Movies;
