import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PokemonSummary {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonSummary[];
}
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private _http: HttpClient) {}

  getPokemons(): Observable<PokemonResponse> {
    return this._http.get<PokemonResponse>(this.baseUrl);
  }
}
