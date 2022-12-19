import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) { }

  getPokemon(count:number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url+count);
  }

}
