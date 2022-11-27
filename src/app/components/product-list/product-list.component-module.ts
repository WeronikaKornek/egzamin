import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    AsyncPipe,
    MatTableModule,
    NgIf
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
