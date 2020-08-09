import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListService } from './services/cart-list-service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [
    CartListService
  ]})
  export class CartModule { }