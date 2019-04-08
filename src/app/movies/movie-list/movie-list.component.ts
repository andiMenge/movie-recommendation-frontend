import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.moviesService.moviesSubject.subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  async ngOnInit() {
    this.moviesService.getMovies();
  }

  ngOnDestroy() {
    this.moviesService.moviesSubject.unsubscribe();
  }
}
