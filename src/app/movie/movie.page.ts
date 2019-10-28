import { Component, OnInit } from '@angular/core';
import { MoviesListService } from '../movies-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movies = [];
  singleMovie;

  constructor(private route: ActivatedRoute,
    private router: Router, private Movies: MoviesListService, private alertController: AlertController, ) { }

  ngOnInit() {

    this.movies = this.Movies.getAllMovies();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('movieName');

      this.singleMovie = this.movies.find(obj => {
        return obj.name.includes(val);

      });
    });
    console.log(this.singleMovie.name);
  }
  back() {
    this.router.navigateByUrl('/movies-list');
  }
  async delet() {
    console.log('deleteMovie', this.singleMovie);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleMovie.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.Movies.deleteMovie(this.singleMovie.name);
            this.router.navigateByUrl('/movies-list');
          }
        }
      ]
    });

    alert.present();
  }

}

