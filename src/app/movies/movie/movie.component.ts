import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // non initialized variable with a property-binding decorator. Data is passed from the movies component.
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
