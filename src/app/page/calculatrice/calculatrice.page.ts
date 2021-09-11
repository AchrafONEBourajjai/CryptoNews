import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
})
export class CalculatricePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  CloseModal(){
    this.modalController.dismiss();
  }
}
