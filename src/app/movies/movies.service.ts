import { Movie } from './movie/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[];
  private moviesSubject = new BehaviorSubject<Movie[]>([]);

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

  getMovies(): Observable<Movie[]> {
    this.fetchMovies();
    return this.moviesSubject.asObservable();
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
