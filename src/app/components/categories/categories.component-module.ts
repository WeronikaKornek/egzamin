import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgForOf,
    MatChipsModule,
    RouterLink,
    MatButtonModule
  ],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
