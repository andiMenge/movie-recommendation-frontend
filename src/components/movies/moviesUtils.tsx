import { IMovie } from './movies.interface';

export function isGenreInMovie(movie: IMovie, genreName: string): boolean {
  return movie.genres.indexOf(genreName) > -1;
}

export function sortByAddedDate(movies: IMovie[]): IMovie[] {
  return movies.sort((a, b) => {
    return (
      new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );
  });
}

export function sortByReleaseDate(movies: IMovie[]): IMovie[] {
  return movies.sort((a, b) => {
    return (
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  });
}
