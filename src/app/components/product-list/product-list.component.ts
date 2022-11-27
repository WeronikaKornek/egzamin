import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListModel } from '../../models/product-list.model';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly data$: Observable<ProductListModel[]> = this._productListService.getAll();

  constructor(private _productListService: ProductListService) {
  }
}
