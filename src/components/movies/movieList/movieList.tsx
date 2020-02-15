import React from "react";
import Movie from "../movie/movie";
import { IMovie } from "../movies.interface";

export function MovieList(props: { movies: IMovie[] }) {
  return (
    <div className="row">
      {props.movies.map(movie => (
        <Movie movie={movie} key={movie.imdb_id} />
      ))}
    </div>
  );
}

export default MovieList;
