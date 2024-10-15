import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroesNombres:string[]=['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  public heroeBorrado?:string;
  removerUltimoHeroe():void{
   this.heroeBorrado=this.heroesNombres.pop();
  }
}
