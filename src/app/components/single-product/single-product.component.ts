import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SingleproductService } from '../../services/singleproduct.service';
import {ProductListModel} from "../../models/product-list.model";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductComponent {
  readonly data$: Observable<ProductListModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._singleproductService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _singleproductService: SingleproductService) {
  }
}
