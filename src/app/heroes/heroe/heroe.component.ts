import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
public nombre:string = 'ironman';
public edad:number = 45;



get nombreCapitalizado():string{
  return this.nombre.toUpperCase();
}
get nomEdad():string{
  return `${this.nombre} - ${this.edad}`;
}
cambiarNombre():void{
  this.nombre='Spiderman';
  // throw "metodo no implementado";
}
cambiarEdad():void{
  this.edad=25;
}
resetForm():void{
  this.nombre='ironman';
  this.edad=45;
}}
