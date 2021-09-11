import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DevisesService } from './devises.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { ModalCalculePageModule } from './pages/modal-calcule/modal-calcule.module';
import { ModelPremiumPageModule } from './pages/model-premium/model-premium.module';
import { CalculatricePageModule } from './page/calculatrice/calculatrice.module';
import { CreditsPageModule } from './pages/credits/credits.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpModule,ModelPremiumPageModule,ModalCalculePageModule,CalculatricePageModule,CreditsPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications ,
    DevisesService,
    InAppBrowser,
    SocialSharing,
    File,
    TouchID,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
