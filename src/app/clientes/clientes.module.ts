import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ItemClienteComponent } from './item-cliente/item-cliente.component';

@NgModule({
  declarations: [AltaClienteComponent, ListadoClientesComponent, ItemClienteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[ClientesService],
  exports:[AltaClienteComponent, ListadoClientesComponent]
})
export class ClientesModule { }
