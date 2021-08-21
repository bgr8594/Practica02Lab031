import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

const routes : Routes =[
  {path:'altaClientes', component: AltaClienteComponent},
  {path:'listadoClientes', component: ListadoClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
