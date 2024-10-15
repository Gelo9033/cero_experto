import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empeados.interface';

@Component({
  selector: 'app-dbz-listadoEmpleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})

export class ListadoEmpleadosComponent {
  @Input()
  public empleadosLista: Empleado[] = [];





  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  onDeletedEmpleado(index: number): void {
    this.onDelete.emit(index);
    //this.empleadosLista.splice(index, 1);
    console.log('Empleado eliminado', index);
}}
