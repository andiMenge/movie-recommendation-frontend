import { Movie } from './movie/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {} // this is needed for HTTP client

  async getMovies(): Promise<Movie[]> {
    // return this.movies.slice(); // slice returns a copy of the movies array. So that we will not modify the actual movies array.
    const movies: any = await this.http.get<any>('https://movies.andimenge.de/api/movies').toPromise();
    return movies.movies;
  }
}
