import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormComponent } from './components/form/form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FormComponentModule } from './components/form/form.component-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductListServiceModule } from './services/product-list.service-module';
import { SingleProductComponentModule } from './components/single-product/single-product.component-module';
import { SingleproductServiceModule } from './services/singleproduct.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesComponent }, { path: 'add-product', component: FormComponent }, { path: 'products-list', component: ProductListComponent }, { path: 'detail/:id', component: SingleProductComponent }]), CategoriesComponentModule, CategoriesServiceModule, FormComponentModule, ProductListComponentModule, ProductListServiceModule, SingleProductComponentModule, SingleproductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
