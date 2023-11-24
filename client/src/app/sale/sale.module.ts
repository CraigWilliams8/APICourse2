import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
