import { Component} from '@angular/core';
import { Empleado } from '../interfaces/empeados.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {
  public empleados:Empleado[]=[
    {
      //id:uuid(),
      nombre: 'Juan',
      sueldo: 1000
    },
    {
      //id:uuid(),
      nombre: 'Pedro',
      sueldo: 2000
    },
    {
      //id:uuid(),
      nombre: 'Maria',
      sueldo: 3000
    },
    {
      //id:uuid(),
      nombre: 'Majo',
      sueldo: 3000
    },
    {
      //id:uuid(),
      nombre: 'Esther',
      sueldo: 3000
    },
  ];

  onNewEmpleado(empleado:Empleado):void{
    this.empleados.push(empleado);

    // console.log('MainPageComponent', empleado);
    // console.log(empleado);
    //const newEmpleado:Empleado={id:uuid(),...empleado};
    //this.empleados.push(newEmpleado);
  }
  onDeleteEmpleado(index: number) {
    this.empleados.splice(index, 1);
    console.log('Empleado eliminado', index);
  }
}
