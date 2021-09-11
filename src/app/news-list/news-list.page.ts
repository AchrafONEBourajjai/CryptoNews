import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async Essayez(){
    const alert = await this.alertController.create({
      header: 'CryptoNews Pro',
      subHeader: 'ESTL',
      message: "L'équipe développe cette fonctionnalité",
      buttons: ['OK']
    });
    await alert.present();
  }

}
