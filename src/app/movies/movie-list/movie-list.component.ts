import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    this.movies = await this.moviesService.getMovies();
  }

}
