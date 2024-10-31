import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { HomeComponent } from '../pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokemonCardComponent, SearchBarComponent, HomeComponent], //Aqui vem os componentes
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], //Aqui vem só os módulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
