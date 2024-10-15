import { Component } from '@angular/core';

@Component({
  selector: 'app_contador',
 template: `
            <h3>Contador : {{contador}}</h3>
            <button (click)="incrementar(+1)">+1</button>
            <button (click)="resetContador()">RESET</button>
            <button (click)="incrementar(-1)">-1</button>
            <hr>
 `,
})

export class ContadorComponente  {
  public contador:number=10;

  incrementar(valor:number):void{
    this.contador+=valor;
  }
  resetContador(){
    this.contador=10;
  }

}
