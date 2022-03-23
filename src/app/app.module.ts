import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainIllustrationComponent } from './main-illustration/main-illustration.component';
import { CardsComponent } from './cards/cards.component';
import { BoostComponent } from './boost/boost.component';
import { FooterComponent } from './footer/footer.component';
import { InputLinkComponent } from './input-link/input-link.component';
import { ShortenApiService } from './shorten-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainIllustrationComponent,
    CardsComponent,
    BoostComponent,
    FooterComponent,
    InputLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShortenApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
