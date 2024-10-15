import { Empleado } from './../interfaces/empeados.interface';
import { Injectable } from '@angular/core';




import{v4 as uuid} from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public empleados:Empleado[]=[
    {
      id:uuid(),
      nombre: 'Juan',
      sueldo: 1000
    },
    {
      id:uuid(),
      nombre: 'Pedro',
      sueldo: 2000
    },
    {
      id:uuid(),
      nombre: 'Maria',
      sueldo: 3000
    },
    {
      id:uuid(),
      nombre: 'Majo',
      sueldo: 3000
    },
    {
      id:uuid(),
      nombre: 'Esther',
      sueldo: 3000
    },
  ];

  onNewEmpleado(empleado:Empleado):void{
    const newEmpleado:Empleado={id:uuid(),...empleado};
    this.empleados.push(newEmpleado);
  }
  // onDeletedEmpleado(index: number) {
  //   this.empleados.splice(index, 1);
  //   console.log('Empleado eliminado', index);
  // }
  deleteEmpleadoById(id: String) {
    this.empleados = this.empleados.filter((empleado) => empleado.id !== id);
  }



}
