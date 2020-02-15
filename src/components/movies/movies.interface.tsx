export interface IMovieResponse {
  movies: IMovie[];
}

export interface IMovie {
  original_title: string;
  imdb_id: string;
  release_date: string;
  is_highlight: boolean;
  image_url: string;
  created_date: string;
  genres: string[];
}
