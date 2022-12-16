import { Component, Input } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input () contador: number;

  constructor(private store: Store<AppState>) {
  this.contador = 10;
  this.store.subscribe(state => {
    this.contador = state.contador;
    });
  }

  incrementar() {
  //this.contador ++;
  const accion: Action = {
    type: 'INCREMENTAR'
    };
    this.store.dispatch( accion );
  }

  decrementar() {
  //this.contador --;
  const accion: Action = {
    type: 'DECREMENTAR'
    };
    this.store.dispatch( accion );
  }
}
