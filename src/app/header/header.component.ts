import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  onFilter(event) {
    this.moviesService.filterByGenre(event.target.id);
  }

  onSort(event) {
    this.moviesService.sort(event.target.id);
  }

  resetFilter() {
    this.moviesService.resetFilter();
  }
}
