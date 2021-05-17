import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppNameComponent } from './header/app-name/app-name.component';
import { MainComponent } from './main/main.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { MainNavbarComponent } from './header/main-navbar/main-navbar.component';
import { SubFooterComponent } from './footer/sub-footer/sub-footer.component';
import { TextComponent } from './main/text/text.component';
import { PictureComponent } from './main/picture/picture.component';
import { MainCardComponent } from './cards/main-card/main-card.component';
import { SubCardComponent } from './cards/sub-card/sub-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AppNameComponent,
    MainComponent,
    SearchBoxComponent,
    MainNavbarComponent,
    SubFooterComponent,
    TextComponent,
    PictureComponent,
    MainCardComponent,
    SubCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
