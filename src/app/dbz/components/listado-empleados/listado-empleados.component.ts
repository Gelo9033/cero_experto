import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empeados.interface';

@Component({
  selector: 'app-dbz-listadoEmpleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})

export class ListadoEmpleadosComponent {
  @Input()
  public empleadosLista: Empleado[] = [];

  onDeletedEmpleado(index: number): void {
    this.empleadosLista.splice(index, 1);
    console.log('Empleado eliminado', index);
  }
}
