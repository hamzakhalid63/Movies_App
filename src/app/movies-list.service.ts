import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {
  movies = [
    {name : 'Lolita',writer : ' by Vladimir Nabokov'},
    {name : 'The Great Gatsby', writer : ' by F. Scott Fitzgerald'},
    {name : 'In Search of Lost Time',writer : 'by Marcel Proust'},
    {name : 'Ulysses',writer : 'James Joyce'},
    {name : 'Dubliners',writer : 'James Joyce'},
    {name : 'One Hundred Years of Solitude',writer : 'Gabriel Garcia Marquez'},
    {name : 'The Sound and the Fury',writer : 'William Faulkner'},
    {name : 'To The Lighthouse',writer : 'Virginia Woolf'},
    {name : 'The complete stories of Flannery O’Connor',writer : 'john'},
    {name : 'Pale Fire',writer : 'Vladimir Nabokov'}
      ];
  constructor() { }

  get getMovies() {
    return this.movies;
  }

  getAllMovies() {
    return this.movies;
  }

  deleteMovie(name) {
    this.movies = this.movies.filter(e => {
      return e.name !== name;
    });
  }

  addMovie(name, writer) {
    this.movies.push({ name:name, writer:writer });
  }

}
