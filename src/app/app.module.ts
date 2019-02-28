import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserAddPage } from './user-add/user-add.page';
import { UserUpdatePage } from './user-update/user-update.page';
@NgModule({
  declarations: [AppComponent, UserAddPage, UserUpdatePage],
  entryComponents: [UserAddPage, UserUpdatePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, FormsModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
