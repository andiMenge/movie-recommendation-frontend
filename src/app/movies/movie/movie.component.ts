import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  mockMovie: Movie = new Movie('Hellboy', 'https://www.imdb.com/title/tt2274648/', '2019-04-11', false, 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/mpc7oxbiPQ0ICn0EEnaSOUf5Ag5.jpg', '2018-12-23T17:46:13.334Z');

  constructor() { }

  ngOnInit() {
  }

}
