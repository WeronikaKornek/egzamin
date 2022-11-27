import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";


@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, RouterLink, NgIf],
  declarations: [FormComponent],
  providers: [],
  exports: [FormComponent]
})
export class FormComponentModule {
}
