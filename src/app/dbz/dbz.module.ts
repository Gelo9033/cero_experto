import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component ';
import { ListadoEmpleadosComponent } from './components/listado-empleados/listado-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevoEmpleado/nuevoEmpleado.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoEmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  exports: [

    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
