import { Movie } from './movie/movie.model';

export class MoviesService {
  // Mock all the things
  private movies: Movie[] = [
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z'),
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z'),
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z')
  ];

  getMovies() {
    return this.movies.slice(); // slice returns a copy of the movies array. So that we will not modify the actual movies array.
  }
}
