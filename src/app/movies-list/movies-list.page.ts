import { Component, OnInit } from '@angular/core';
import {MoviesListService} from '../movies-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor(private Movies: MoviesListService, private router: Router) { }

  movies = [];

  ngOnInit() {
    this.movies = this.Movies.getAllMovies();
  }
  changeUrl(user) {
    const name = user.name;
    const url = `movies-list/${name}`;
    this.router.navigateByUrl(url);
}
  ionViewDidEnter() {
    this.movies = this.Movies.getAllMovies();
  }
}
