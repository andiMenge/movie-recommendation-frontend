import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z'),
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z'),
    new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z')
  ];

  // fetchMovies(): Movie[] {
  //   const movies: Movie[] = [
  //     new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z')
  //   ];
  //   return movies;
  // }

  constructor() { }

  ngOnInit() {
  }

}
