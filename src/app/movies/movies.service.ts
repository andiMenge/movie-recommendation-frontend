import { Movie } from './movie/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class MoviesService {
  movies = new Subject<Movie[]>();

  constructor(private http: HttpClient) {} // this is needed for HTTP client

  async fetchMovies(): Promise<Movie[]> {
    const movies: any = await this.http
      .get<any>('https://movies.andimenge.de/api/movies')
      .toPromise();
    return movies.movies;
  }

  async getMovies() {
    this.movies.next(await this.fetchMovies());
  }
}
