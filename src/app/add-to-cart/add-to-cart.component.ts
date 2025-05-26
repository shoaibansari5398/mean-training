import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Products } from '../../model/Products';
import { Cart } from '../Cart';

@Component({
  selector: 'app-add-to-cart',
  standalone: false,
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
})
export class AddToCartComponent implements OnChanges,OnDestroy {
  @Input('selectedProduct') product: Products | null;
  quantitySelected: number;
  @Output() sendDataFromAddToCartToPD: EventEmitter<Cart | null>;
  @Output() sendCancelEventFromAddToCartPD:EventEmitter<void>;

  constructor() {
    this.product = null;
    this.quantitySelected = 1;
    this.sendDataFromAddToCartToPD = new EventEmitter<Cart | null>();
    this.sendCancelEventFromAddToCartPD = new EventEmitter<void>();
  }

  ngOnDestroy(){
    console.log("On Destroy called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['product'] &&
      changes['product'].previousValue &&
      changes['product'].currentValue !== changes['product'].previousValue
    ) {
      this.quantitySelected = 1;
    }
  }

  decreaseQuantity() {
    if (this.quantitySelected > 1) {
      this.quantitySelected--;
    }
  }

  increaseQuantity() {
    if (this.product && this.quantitySelected < this.product.quantity) {
      this.quantitySelected++;
    }
  }

  confirmEventHandler() {
    var cartObj: Cart | null = this.product
      ? new Cart(
          this.product.productId,
          this.product.productName,
          this.product.imageUrl,
          this.product.description,
          this.product.price,
          this.product.quantity,
          this.quantitySelected
        )
      : null;

    this.sendDataFromAddToCartToPD.emit(cartObj);
  }

  cancelEventHandler() {
    this.sendCancelEventFromAddToCartPD.emit();
  }
}
