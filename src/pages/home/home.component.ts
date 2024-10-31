import { Component, OnInit } from '@angular/core';
import { PokemonService, PokemonSummary } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemons: PokemonSummary[] = [];
  constructor(private api: PokemonService) {}

  ngOnInit(): void {
    this.api.getPokemons().subscribe((data) => (this.pokemons = data.results));
  }
}
