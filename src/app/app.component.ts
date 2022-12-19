import { Component,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store/src';
import { DecrementarAction, IncrementarAction } from './components/contador/contador.actions';
import { PokemonService } from './services/pokemon.service';

interface AppState{
  contador:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemon:any
  contador:number=0

  constructor(private store: Store<AppState>,private pokemonService:PokemonService){
    this.store.select('contador').subscribe(state=>{
      this.contador = state
      this.getPokemon()
    })
    
  }
  incrementar(){
    const accion = new IncrementarAction()
    this.store.dispatch(accion)
  }
  decrementar(){
    const accion = new DecrementarAction()
    this.store.dispatch(accion)
  }
  getPokemon(){
    this.pokemon = this.pokemonService.getPokemon(this.contador).subscribe(result=> this.pokemon = result);
  }
}
