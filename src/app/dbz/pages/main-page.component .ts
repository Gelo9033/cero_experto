import { Component} from '@angular/core';
import { Empleado } from '../interfaces/empeados.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent  {
  constructor(private dbzService:DbzService){}

  get empleados():Empleado[]{
    return [...this.dbzService.empleados];
  }
  onDeleteEmpleado(index: number) {
    this.dbzService.onDeleteEmpleado(index);
    console.log('Empleado eliminado', index);
  }
  onNewEmpleado(empleado:Empleado):void{
    this.dbzService.addEmpleado(empleado);
  }

}
