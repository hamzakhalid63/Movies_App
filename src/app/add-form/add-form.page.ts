import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MoviesListService } from '../movies-list.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {

  public nameText: string;
  public writerText: string;
  data = [{ name: this.nameText, author: this.writerText }];
  constructor(public alertController: AlertController, private movies: MoviesListService) { }

  ngOnInit() {
  }
  async addMovie() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Movie ' + this.nameText + ' by ' + this.writerText + ' is added ',
      buttons: ['OK']
    });
    alert.present();
    this.movies.addMovie(this.nameText, this.writerText);
  }

}
