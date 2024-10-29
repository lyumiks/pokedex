import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, PokemonCardComponent, SearchBarComponent], //Aqui vem os componentes
  imports: [BrowserModule, AppRoutingModule], //Aqui vem só os módulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
