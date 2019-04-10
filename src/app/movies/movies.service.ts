import { Movie } from './movie/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesSubject = new Subject<Movie[]>();
  movies: Movie[];

  constructor(private http: HttpClient) { }

  async fetchMovies() {
    try {
    const movies: any = await this.http
      .get<any>('https://movies.andimenge.de/api/movies')
      .toPromise();
      this.movies = movies.movies;
      this.moviesSubject.next(this.movies);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  async getMovies() {
    this.movies = await this.fetchMovies();
    this.moviesSubject.next(this.movies);
  }

  filterByGenre(genreName: string) {
    const filteredMovies = this.movies.filter(movie => this.isGenreInMovie(movie, genreName));
    if (filteredMovies.length > 0) {
      this.moviesSubject.next(filteredMovies);
    } else {
      console.log('no movies found with genre:', genreName);
    }
  }

  resetFilter() {
    this.moviesSubject.next(this.movies);
  }

  isGenreInMovie(movie: Movie, genreName: string): boolean {
    return movie.genres.indexOf(genreName) > -1;
  }

}
