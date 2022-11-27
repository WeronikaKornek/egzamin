import { NgModule } from '@angular/core';
import { SingleProductComponent } from './single-product.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe,
    NgIf
  ],
  declarations: [SingleProductComponent],
  providers: [],
  exports: [SingleProductComponent]
})
export class SingleProductComponentModule {
}
