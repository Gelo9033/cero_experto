import { Empleado } from './../../interfaces/empeados.interface';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dbz-nuevoEmpleado',
  templateUrl: './nuevoEmpleado.component.html',
  styleUrls: ['./nuevoEmpleado.component.css']
})
export class NuevoEmpleadoComponent  {
  @Output()
  public onNewEmpleado:EventEmitter<Empleado>=new EventEmitter();

public empleado:Empleado={
nombre: '',
sueldo: 0
}
emitirEmpleado():void{
  console.log(this.empleado);
  if (this.empleado.nombre.length===0)return;
  this.onNewEmpleado.emit({...this.empleado});//tomar en cuenta que se debe crear un nueco elemento  con {...this.empleado}
  this.empleado.nombre='';
  this.empleado.sueldo=0;
}


}
