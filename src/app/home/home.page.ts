import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private localNotifications: LocalNotifications,private touchId: TouchID,private router : Router) { }
  Open(){
    this.touchId.verifyFingerprint('Scan your fingerprint please')
  .then(
    res =>{this.router.navigate(['/news-list']);} ,
    err => {document.write('Error');}
  );
  }
}

