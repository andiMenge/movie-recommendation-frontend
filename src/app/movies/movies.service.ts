import { Movie } from './movie/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies = new Subject<Movie[]>();
  moviesArr: Movie[];

  constructor(private http: HttpClient) { }

  async fetchMovies() {
    const movies: any = await this.http
      .get<any>('https://movies.andimenge.de/api/movies')
      .toPromise();
    return movies.movies;
  }

  async getMovies() {
    this.moviesArr = await this.fetchMovies();
    this.movies.next(this.moviesArr);
  }

  filterByGenre(genreName: string) {
    const filteredMovies = this.moviesArr.filter(movie => this.isGenreInMovie(movie, genreName));
    if (filteredMovies.length > 0) {
      this.movies.next(filteredMovies);
    } else {
      console.log('no movies found with genre:', genreName);
    }
  }

  resetFilter() {
    this.movies.next(this.moviesArr);
  }

  isGenreInMovie(movie: Movie, genreName: string): boolean {
    return movie.genres.indexOf(genreName) > -1;
  }

}
